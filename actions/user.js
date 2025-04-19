"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {

    const { userId } = await auth();

  
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");
  
    let industryInsight = await db.industryInsight.findUnique({
      where: { industry: data.industry },
    });
  
    if (!industryInsight) {

      const insights = await generateAIInsights(data.industry);

  
      industryInsight = await db.industryInsight.create({
        data: {
          industry: data.industry,
          ...insights,
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    }
  
    try {
      const updatedUser = await db.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        },
      });
  
      return { success: true, updatedUser, industryInsight };
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw new Error("Failed to update profile: " + error.message);
    }
  }
  

export async function getUserOnboarding() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    if (!user) throw new Error("User not found");

    return { isOnboarded: !!user.industry };
  } catch (error) {
    console.error("Error fetching onboarding status:", error.message);
    throw new Error("Failed to fetch onboarding status");
  }
}
