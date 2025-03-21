import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PlacementsPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Placement Statistics
            </h1>
            <p className="text-xl text-blue-100">
              NIT Mizoram has consistently achieved excellent placement records
              across various disciplines. Our students are recruited by leading
              companies from diverse sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Placement Highlights 2023-24
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-blue-50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    95%+
                  </div>
                  <div className="text-neutral-600">Overall Placement</div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    120+
                  </div>
                  <div className="text-neutral-600">Companies Visited</div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    ₹24 LPA
                  </div>
                  <div className="text-neutral-600">Highest Package</div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    ₹8.5 LPA
                  </div>
                  <div className="text-neutral-600">Average Package</div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Department-wise Placement Statistics
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead>Students Placed</TableHead>
                    <TableHead>Total Students</TableHead>
                    <TableHead>Placement %</TableHead>
                    <TableHead>Highest Package (LPA)</TableHead>
                    <TableHead>Average Package (LPA)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Computer Science & Engineering
                    </TableCell>
                    <TableCell>58</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>96.7%</TableCell>
                    <TableCell>24.0</TableCell>
                    <TableCell>12.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Electronics & Communication
                    </TableCell>
                    <TableCell>52</TableCell>
                    <TableCell>55</TableCell>
                    <TableCell>94.5%</TableCell>
                    <TableCell>18.5</TableCell>
                    <TableCell>9.8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Electrical Engineering
                    </TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>52</TableCell>
                    <TableCell>92.3%</TableCell>
                    <TableCell>16.0</TableCell>
                    <TableCell>8.2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Mechanical Engineering
                    </TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>90.0%</TableCell>
                    <TableCell>14.5</TableCell>
                    <TableCell>7.8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Civil Engineering
                    </TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>87.5%</TableCell>
                    <TableCell>12.0</TableCell>
                    <TableCell>6.5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Year-wise Placement Trends
            </h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Academic Year</TableHead>
                    <TableHead>Placement %</TableHead>
                    <TableHead>Companies Visited</TableHead>
                    <TableHead>Highest Package (LPA)</TableHead>
                    <TableHead>Average Package (LPA)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">2023-24</TableCell>
                    <TableCell>95.2%</TableCell>
                    <TableCell>120+</TableCell>
                    <TableCell>24.0</TableCell>
                    <TableCell>8.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2022-23</TableCell>
                    <TableCell>93.8%</TableCell>
                    <TableCell>110+</TableCell>
                    <TableCell>22.0</TableCell>
                    <TableCell>8.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2021-22</TableCell>
                    <TableCell>92.5%</TableCell>
                    <TableCell>95+</TableCell>
                    <TableCell>20.0</TableCell>
                    <TableCell>7.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2020-21</TableCell>
                    <TableCell>90.0%</TableCell>
                    <TableCell>85+</TableCell>
                    <TableCell>18.0</TableCell>
                    <TableCell>7.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2019-20</TableCell>
                    <TableCell>88.5%</TableCell>
                    <TableCell>80+</TableCell>
                    <TableCell>16.0</TableCell>
                    <TableCell>6.8</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Our Recruiters</h2>
            <p className="text-lg text-neutral-600 mb-8">
              We are proud to be associated with leading companies across
              various sectors. Some of our prominent recruiters include:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Microsoft",
                "Google",
                "Amazon",
                "TCS",
                "Infosys",
                "Wipro",
                "IBM",
                "Accenture",
                "Deloitte",
                "Cognizant",
                "HCL",
                "Tech Mahindra",
                "L&amp;T",
                "Capgemini",
                "Oracle",
                "Adobe",
                "Samsung",
                "Intel",
                "NVIDIA",
                "Qualcomm",
                "Cisco",
                "Goldman Sachs",
                "Morgan Stanley",
                "JP Morgan",
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-4 flex items-center justify-center h-16 shadow-sm"
                >
                  <span className="font-semibold text-neutral-700">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
