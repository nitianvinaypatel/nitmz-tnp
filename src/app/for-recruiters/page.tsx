import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";

export default function ForRecruitersPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner with NIT Mizoram
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Recruit top engineering talent from one of India&apos;s premier
              technical institutions. Our graduates are industry-ready and
              equipped with the skills to drive innovation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Recruit from NIT Mizoram?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 text-blue-600">
                  <FaGraduationCap size={30} />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our rigorous academic programs ensure that students receive a
                  solid foundation in their respective fields, with a focus on
                  both theoretical knowledge and practical applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 text-blue-600">
                  <FaUsers size={30} />
                </div>
                <CardTitle>Diverse Talent Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With students from across the country, our diverse talent pool
                  brings varied perspectives and approaches to problem-solving,
                  enriching your organization&apos;s capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 text-blue-600">
                  <FaCalendarAlt size={30} />
                </div>
                <CardTitle>Streamlined Recruitment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our dedicated T&P Cell ensures a smooth and efficient
                  recruitment process, from scheduling to logistics, allowing
                  you to focus on identifying the right talent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 text-blue-600">
                  <FaChartLine size={30} />
                </div>
                <CardTitle>Industry-Ready Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Beyond academics, our students participate in projects,
                  competitions, and industry collaborations, developing the
                  practical skills needed to contribute from day one.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-8">Recruitment Process</h2>
          <div className="space-y-6 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Registration</h3>
              <p className="text-neutral-600">
                Companies interested in recruiting from NIT Mizoram can register
                by filling out the recruitment form or contacting the T&P Cell
                directly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. Pre-Placement Talk
              </h3>
              <p className="text-neutral-600">
                Companies are invited to conduct a pre-placement talk to
                introduce their organization, job profiles, and selection
                process to interested students.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                3. Selection Process
              </h3>
              <p className="text-neutral-600">
                Companies can conduct their selection process as per their
                requirements, which may include written tests, interviews, group
                discussions, etc. The T&P Cell provides all necessary
                infrastructure and support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4. Job Offers</h3>
              <p className="text-neutral-600">
                Selected candidates receive job offers as per the company&apos;s
                policies. The T&P Cell facilitates the communication of offers
                to students.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Programs Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">B.Tech Programs</h3>
              <ul className="list-disc pl-6 space-y-1 text-neutral-600">
                <li>Computer Science and Engineering</li>
                <li>Electronics and Communication Engineering</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Civil Engineering</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">M.Tech Programs</h3>
              <ul className="list-disc pl-6 space-y-1 text-neutral-600">
                <li>Computer Science and Engineering</li>
                <li>Electronics and Communication Engineering</li>
                <li>Electrical Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Civil Engineering</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Recruit?</h2>
            <p className="text-lg text-neutral-600 mb-6">
              Connect with us to discuss your recruitment needs and schedule a
              campus drive.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact T&P Cell</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
