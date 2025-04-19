import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Herosection from "@/components/Herosection";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { features } from "@/data/feature";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testinomial";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";
export default function Home() {
  
  
  return (
    <>
      <div className="grid-background">
      </div>
      <Herosection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">

          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerfull Features to Support Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">


                  <CardContent className="flex flex-col pt-6 text-center items-center">
                    <div className="flex flex-col justify-center items-center">{feature.icon}
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>

                </Card>

              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl">50+</h3>
              <p className="texted-muted-foreground">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl">1000+</h3>
              <p className="texted-muted-foreground">Industries Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl">95%</h3>
              <p className="texted-muted-foreground">Sucess Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl">24/7</h3>
              <p className="texted-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">

            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Four Simple Step To Accerlate Your Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((items, index) => {
              return (
                <div key={index}
                  className="text-center flex flex-col justify-center items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {items.icon}</div>
                  <h3 className="font-semibold text-xl">{items.title}</h3>
                  <p className="text-muted-foreground">{items.description}</p>
                </div>


              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">

          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our User Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testinomial, index) => {
              return (
                <Card key={index} className="bg-background">


                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-col space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                          width={40}
                          height={40}
                          src={testinomial.image}
                          alt={testinomial.author}
                          className="rounded-full object-cover border-2 border-primary/20"

                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testinomial.author}</p>
                          <p className="text-sm text-muted-foreground">{testinomial.role}</p>
                          <p className="text-sm text-primary">{testinomial.company}</p>
                        </div>
                      </div>
                      <blockquote>
                      <p className="text-muted-foreground italic relative">
  <span className="text-3xl text-primary absolute -top-4 -left-2">
    &quot;
  </span>
  {testinomial.quote}
  <span className="text-3xl text-primary absolute -bottom-4 ">
    &quot;
  </span>
</p>


                      </blockquote>
                    </div>
                  </CardContent>

                </Card>

              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find Answer To Common Questions About Our Platform</p>
          <div className="max-w-6xl mx-auto">

            <Accordion type="single" collapsible>
            {faqs.map((faq, index) => {
              return (
  <AccordionItem key={index} value={`item-${index}`}>
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>
    {faq.answer}
    </AccordionContent>
  </AccordionItem>


);
})}
</Accordion>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="py-24 mx-auto px-4 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center  max-w-3xl mx-auto">


          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">Ready to Accerlate Your Career?</h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">Join Thousands of Proffesionals who are advancing there careers with AI-guidance.</p>
          <Link href={"/dashboard"}>
          <Button
          size="lg"
          variant="secondary"
          className="h-11 mt-5 animate-bounce"
          > 
            Start Your Journey Now <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
          </Link>
          
          </div>
        </div>
      </section>
    </>
  );
}
