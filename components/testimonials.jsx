"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        content:
          "BookEase has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
        image: "https://i.pravatar.cc/150?img=1",
      },
      {
        name: "David Lee",
        role: "Freelance Designer",
        content:
          "As a freelancer, BookEase helps me stay organized and professional. My clients love how easy it is to book time with me.",
        image: "https://i.pravatar.cc/150?img=2",
      },
      {
        name: "Emily Chen",
        role: "Startup Founder",
        content:
          "BookEase streamlined our hiring process. Setting up interviews has never been easier!",
        image: "https://i.pravatar.cc/150?img=3",
      },
      {
        name: "Michael Brown",
        role: "Sales Executive",
        content:
          "I've seen a 30% increase in my meeting bookings since using BookEase. It's a game-changer for sales professionals.",
        image: "https://i.pravatar.cc/150?img=4",
      },
      {
        name: "Jessica Williams",
        role: "HR Specialist",
        content:
          "BookEase has made coordinating interviews and internal meetings a breeze. It integrates perfectly with our existing tools!",
        image: "https://i.pravatar.cc/150?img=5",
      },
      {
        name: "Tom Harris",
        role: "Project Manager",
        content:
          "Managing multiple projects and stakeholders is now effortless. BookEase's scheduling automation has boosted our productivity.",
        image: "https://i.pravatar.cc/150?img=6",
      },
      {
        name: "Rachel Green",
        role: "Customer Support Lead",
        content:
          "Our customer satisfaction has improved since using BookEase. Scheduling support calls is quick, easy, and convenient for our clients.",
        image: "https://i.pravatar.cc/150?img=7",
      },
      {
        name: "Mark Taylor",
        role: "Consultant",
        content:
          "BookEase simplifies my client meetings, letting me focus more on delivering value instead of managing schedules.",
        image: "https://i.pravatar.cc/150?img=8",
      },
      {
        name: "Sophia Davis",
        role: "Event Coordinator",
        content:
          "As an event planner, BookEase has been a lifesaver! It's helped me streamline my scheduling and stay on top of client bookings.",
        image: "https://i.pravatar.cc/150?img=9",
      }
      
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;
