import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Building2,
  Leaf,
  Shield,
  Sun,
  MapPin,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">
                Next-Generation Public Furniture
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your City's
                <span className="text-emerald-600 block">Public Spaces</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Modular, eco-friendly furniture that brings comfort, shade, and
                style to parks and workspaces. Made with sustainable geopolymers
                for a better tomorrow.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="h-4 bg-emerald-200 rounded w-3/4"></div>
                  <div className="h-4 bg-emerald-100 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <Sun className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="h-20 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <Leaf className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Users className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              Your Voice Shapes the Future
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't Just Dream About Better Public Spaces -
            <span className="block text-emerald-100">Help Us Build Them!</span>
          </h2>

          <p className="text-emerald-100 text-lg mb-6 max-w-3xl mx-auto">
            Every great public space starts with understanding what people
            actually need. Take 3 minutes to share your experience and help us
            design furniture that truly serves your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-lg px-8 py-6 group"
            >
              <Users className="mr-2 h-6 w-6" />
              Take the 3-Minute Survey
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-emerald-100 text-sm">
              ✨ You're in good company — add your voice
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">3 min</div>
              <div className="text-emerald-100 text-sm">Quick & Easy</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-emerald-100 text-sm">Anonymous</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">Real</div>
              <div className="text-emerald-100 text-sm">Impact</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Solving Real Problems in Public Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From lack of shade to uncomfortable seating, we've reimagined
              public furniture to address the challenges people face every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrated Shade</h3>
                <p className="text-muted-foreground">
                  Built-in canopies and strategic design provide essential
                  shade, making public spaces comfortable even on the hottest
                  days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Eco-Friendly Materials
                </h3>
                <p className="text-muted-foreground">
                  Made with sustainable geopolymers that reduce environmental
                  impact while providing superior durability and weather
                  resistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Modular Design</h3>
                <p className="text-muted-foreground">
                  Flexible configurations adapt to any space, from intimate park
                  corners to large corporate outdoor areas. Easy installation
                  and maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  For Municipal Leaders
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Increase Public Space Usage
                  </h3>
                  <p className="text-muted-foreground">
                    Transform underutilized areas into vibrant community hubs
                    that residents actually want to use.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Meet Sustainability Goals
                  </h3>
                  <p className="text-muted-foreground">
                    Demonstrate environmental leadership with furniture that
                    aligns with green city initiatives.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Reduce Maintenance Costs
                  </h3>
                  <p className="text-muted-foreground">
                    Durable geopolymer construction means less frequent
                    replacement and lower long-term costs.
                  </p>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Municipal Proposal
              </Button>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  For Corporate Spaces
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Attract Employees Back
                  </h3>
                  <p className="text-muted-foreground">
                    Create inviting outdoor workspaces that make the office more
                    appealing than home.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Boost Corporate Image
                  </h3>
                  <p className="text-muted-foreground">
                    Show commitment to employee wellbeing and environmental
                    responsibility.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Modular design adapts to courtyards, terraces, and outdoor
                    meeting areas.
                  </p>
                </div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Corporate Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-emerald-50 to-green-100 border-t border-emerald-200 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're planning a public space transformation or looking
              to enhance your corporate environment, we're here to help make it
              happen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-emerald-700">
                  Contact Us
                </h4>
                <p className="text-muted-foreground mb-4">
                  Ready to discuss your project? Get in touch with our team of
                  experts.
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-emerald-700">
                  Sustainability
                </h4>
                <p className="text-muted-foreground mb-4">
                  Learn more about our eco-friendly geopolymer materials and
                  environmental impact.
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:border-emerald-400 transition-colors">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-emerald-700">
                  Installation
                </h4>
                <p className="text-muted-foreground mb-4">
                  Discover how our modular system makes installation quick and
                  efficient.
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  View Process
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8 border-t border-emerald-200">
            <p className="text-muted-foreground">
              © 2024 Modular Public Furniture. Building better public spaces
              with sustainable design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
