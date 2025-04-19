import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkuser=async() => {
    const user=await currentUser();
    if(!user){
        return null
    }
    try {
        const loggedUser=await db.user.findUnique({
            where:{
                clerkUserId:user.id,
            },
        })
        if(loggedUser){
            return loggedUser
        }
        else{
            const name=`${user.firstName}${user.lastName}`
            const NewUser=await db.user.create({
                data:{
                    clerkUserId:user.id,
                    name,
                    imageUrl:user.imageUrl,
                    email:user.emailAddresses[0].emailAddress,
                }
            })
            return NewUser
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
  
}
