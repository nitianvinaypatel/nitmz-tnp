import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
            Have questions about placements or recruitment? Get in touch with
            the Training & Placement Cell at NIT Mizoram.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="text-blue-600 mt-1">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-neutral-600">
                        Training & Placement Cell
                        <br />
                        National Institute of Technology Mizoram
                        <br />
                        Chaltlang, Aizawl
                        <br />
                        Mizoram - 796012
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="text-blue-600 mt-1">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-neutral-600">
                        +91-123-456-7890
                        <br />
                        +91-123-456-7891
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="text-blue-600 mt-1">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-neutral-600">
                        tnp@nitmz.ac.in
                        <br />
                        tpo@nitmz.ac.in
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="text-blue-600 mt-1">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Office Hours
                      </h3>
                      <p className="text-neutral-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden">
              {/* In a real implementation, you would embed a Google Map here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-neutral-500">
                  Google Map will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
