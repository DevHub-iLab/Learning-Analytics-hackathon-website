"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Trophy, Calendar, Users, Target, Award, ExternalLink } from "lucide-react"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What is the Reimagine Learning through Learning Analytics @ NTU Hackathon?",
      answer:
        "It's a collaborative hackathon between NTU and Imperial College London where students design innovative learning analytics solutions to empower self-aware learning using AI, learning sciences, and user interface design.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to NTU students from all disciplines. Teams should preferably be interdisciplinary, with at least one member from CCDS.",
    },
    {
      question: "How do I register?",
      answer: "Register via the registration link attached above!",
    },
    {
      question: "What are the stages of the competition?",
      answer:
        "There are three stages: Ideation, Implementation and Presentation. The Ideation stage will be a proposal submission. After advancing to stage 2, teams will implement their proposed ideas and present them physically for judging on the Competition Day. The top 3 winners will then refine and prepare for the award ceremony which will be a joint conference with Imperial College London.",
    },
    {
      question: "What skills or background do I need?",
      answer:
        "No prior hackathon experience is required. Participants from all backgrounds including learning sciences, AI, design, or tech are welcome. Workshops will help you get started.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Finalists are chosen based on proposal evaluation, solution implementation, and presentations. Both student votes and faculty judges contribute to the final decision.",
    },
    {
      question: "What do winners receive?",
      answer:
        "Top teams will present at a joint conference with Imperial College London and have their solutions considered for integration into NTU's NALA platform.",
    },
  ]

  const timelineEvents = [
    {
      date: "4th - 11th July 2025",
      title: "Pre-Registration",
      description: "Register for the hackathon and receive updates.",
    },
    {
      date: "15th July 2025",
      title: "Opening Ceremony",
      description: "Kick-off the hackathon and learn more about the challenge.",
    },
    {
      date: "15th - 25th July 2025",
      title: "Call for Participants",
      description: "Form teams and officially sign up for the hackathon.",
    },
    {
      date: "4th - 6th Aug 2025",
      title: "Training Sessions",
      description: "Attend workshops and training sessions to prepare your team.",
    },
    {
      date: "15th Aug 2025",
      title: "Proposal Submission Deadline",
      description: "Submit your team's proposal for the hackathon challenge.",
    },
    {
      date: "22nd Aug 2025",
      title: "Proposal Result Announcement",
      description: "Find out if your team has been shortlisted for Stage 1."
    },
    {
      date: "25th Aug - 30th Sep 2025",
      title: "Implementation Phase",
      description: "Develop and implement your solution with mentorship support."
    },
    {
      date: "1st Oct 2025",
      title: "Demo and Presentation",
      description: "Showcase your solution to judges and peers."
    },
    {
      date: "6th Oct - 4th Nov 2025",
      title: "Refining and Preparation",
      description: "Refine your solution and prepare for the final presentation."
    },
    {
      date: "5th Nov 2025",
      title: "Award Ceremony",
      description: "Celebrate the winners and outstanding solutions."
    }
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#4338CA] shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center space-x-3">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8 rounded bg-white p-1" />
            <span className="font-bold text-xl tracking-tight text-white">Innovation Lab</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#about" className="text-white hover:text-[#E0E7FF] text-base font-medium">About</Link>
            <Link href="#resources" className="text-white hover:text-[#E0E7FF] text-base font-medium">Resources</Link>
            <Link href="#events" className="text-white hover:text-[#E0E7FF] text-base font-medium">Events</Link>
            <Link href="#timeline" className="text-white hover:text-[#E0E7FF] text-base font-medium">Timeline</Link>
            <Link href="#faq" className="text-white hover:text-[#E0E7FF] text-base font-medium">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-br from-[#4338CA] to-[#0F172A] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight drop-shadow-xl">
          Discover Generative AI Learning Resources
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl text-[#E0E7FF] font-medium mb-8">
          Explore curated courses, tutorials, and events on AI, creative technology, and analytics.
        </p>
        <a
          href="#resources"
          className="inline-block px-8 py-3 rounded-lg bg-[#857EDD] hover:bg-[#4338CA] text-white font-semibold shadow-lg transition"
        >
          Browse Resources
        </a>
      </header>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E7FF] mb-10 text-center">Featured Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Card 1 */}
          <div className="bg-[#1e2165] rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold text-white mb-2">Intro to Generative AI</h3>
            <p className="text-[#E0E7FF] mb-4 flex-1">A beginner-friendly course covering the foundations of generative models and their applications.</p>
            <a href="#" className="mt-auto text-[#857EDD] hover:text-white underline font-medium">Learn more</a>
          </div>
          {/* Resource Card 2 */}
          <div className="bg-[#1e2165] rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold text-white mb-2">Hands-on GANs</h3>
            <p className="text-[#E0E7FF] mb-4 flex-1">Step-by-step guide to building and training Generative Adversarial Networks.</p>
            <a href="#" className="mt-auto text-[#857EDD] hover:text-white underline font-medium">Learn more</a>
          </div>
          {/* Resource Card 3 */}
          <div className="bg-[#1e2165] rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold text-white mb-2">Creative Coding with AI</h3>
            <p className="text-[#E0E7FF] mb-4 flex-1">Explore how AI can generate images, music, and text with creative code labs and projects.</p>
            <a href="#" className="mt-auto text-[#857EDD] hover:text-white underline font-medium">Learn more</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#857EDD] mb-6">About Innovation Lab</h2>
        <p className="text-lg text-[#E0E7FF] mb-4">
          The Innovation Lab @ CCDS is dedicated to empowering students and educators with the latest in AI and creative technology. Join our events, explore learning resources, and connect with a vibrant community!
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E7FF] mb-10 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Card 1 */}
          <div className="bg-[#4338CA] rounded-xl shadow-xl p-6 text-white flex flex-col hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">Generative AI Hackathon</h3>
            <p className="mb-4 text-[#E0E7FF]">Compete, collaborate, and create with peers in our AI-powered hackathon series.</p>
            <span className="inline-block px-4 py-1 rounded bg-[#857EDD] text-sm font-medium mt-auto">July 2025</span>
          </div>
          {/* Event Card 2 */}
          <div className="bg-[#1e2165] rounded-xl shadow-xl p-6 text-white flex flex-col hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">AI in Education Seminar</h3>
            <p className="mb-4 text-[#E0E7FF]">Discover how generative AI is transforming classrooms and curriculum at NTU.</p>
            <span className="inline-block px-4 py-1 rounded bg-[#4338CA] text-sm font-medium mt-auto">August 2025</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Timeline</h2>
            <p className="text-xl text-gray-600">Key dates and milestones for the hackathon</p>
          </div>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-600 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the hackathon</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqData.map((faq, index) => (
              <Collapsible key={index} open={openFaq === index} onOpenChange={() => toggleFaq(index)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full p-6 h-auto text-left bg-indigo-100 hover:bg-indigo-200 rounded-lg border-none justify-between items-start"
                  >
                    <span className="font-medium text-gray-900 pr-4 text-wrap leading-relaxed">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prize Section</h2>
            <p className="text-xl text-gray-600">Recognition and opportunities for outstanding teams</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-yellow-200 bg-gradient-to-b from-yellow-50 to-white">
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top 3 Teams</h3>
              <p className="text-gray-700 mb-4">
                Winners will present their solutions at a joint conference with Imperial College London.
              </p>
              <div className="bg-yellow-100 rounded-lg p-4">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-yellow-800 font-medium">Conference Presentation</p>
              </div>
            </Card>
            <Card className="text-center p-8 border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NALA Integration</h3>
              <p className="text-gray-700 mb-4">
                Outstanding solutions will be considered for integration into NTU's NALA platform.
              </p>
              <div className="bg-blue-100 rounded-lg p-4">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-800 font-medium">Real-world Impact</p>
              </div>
            </Card>
            <Card className="text-center p-8 border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white">
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Networking</h3>
              <p className="text-gray-700 mb-4">
                Connect with industry mentors, faculty, and peers from NTU and Imperial College London.
              </p>
              <div className="bg-purple-100 rounded-lg p-4">
                <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-800 font-medium">Global Connections</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsors & Partners</h2>
          </div>
          {/* Sponsors Subsection */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sponsors</h2>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center items-center">
                <img
                  src="images/NTU.jpg"
                  alt="Nanyang Technological University Singapore"
                  className="max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          {/* Partners Subsection */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partners</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex justify-center items-center">
                <img
                  src="images/imperialcollege.jpg"
                  alt="Imperial College London"
                  className="max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="images/ilab.jpg"
                  alt="iLab"
                  className="max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}