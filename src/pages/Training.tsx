
import Navbar from "@/components/Navbar";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock, Scissors } from "lucide-react";
import TrainingInquiryForm from "@/components/TrainingInquiryForm";

const courseHighlights = [
    { icon: Award, title: "Expert Instructors", description: "Learn from tailors with decades of experience." },
    { icon: Users, title: "Small Batch Sizes", description: "Personalized attention in every class." },
    { icon: Clock, title: "Flexible Timings", description: "Weekend and weekday batches available." },
    { icon: CheckCircle, title: "Certification", description: "Receive a certificate upon course completion." },
];

const pricingTiers = [
    {
        title: "Beginner's Course",
        price: "₹5,000",
        duration: "6 Weeks",
        features: ["Introduction to sewing machines", "Basic stitching techniques", "Fabric fundamentals", "Simple garment creation"],
        icon: Scissors,
        isPopular: true,
    },
    {
        title: "Advanced Course",
        price: "₹10,000",
        duration: "12 Weeks",
        features: ["Advanced pattern making", "Complex garment construction", "Draping and fitting", "Portfolio development"],
        icon: Award,
        isPopular: false,
    },
];

const Training = () => {
    const { isDark } = useTheme();

    return (
        <div className={cn("min-h-screen transition-colors duration-300", isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900")}>
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className={cn(
                    "py-20 px-4",
                    isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
                )}>
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Master the Art of Tailoring</h1>
                            <p className={cn(
                                "text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 mb-8",
                                isDark ? "text-gray-300" : "text-gray-700"
                            )}>
                                Join our professional training program and turn your passion into a profession. Learn from expert tailors in a supportive environment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
                                    <a href="#training-form">Start Learning Today</a>
                                </Button>
                                <Button variant="outline" size="lg" className="font-semibold px-8 py-3">
                                    <a href="#training-pricing">View Courses</a>
                                </Button>
                            </div>
                        </div>
                        
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80"
                                    alt="Woman learning to sew"
                                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=400&q=80"
                                    alt="Colorful fabrics and threads"
                                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                                />
                            </div>
                            <div className="space-y-4 pt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1566399041716-20c0f8d65e14?auto=format&fit=crop&w=400&q=80"
                                    alt="Sewing machine in action"
                                    className="rounded-lg shadow-lg w-full h-32 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=400&q=80"
                                    alt="Hands working on sewing project"
                                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="py-16 max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courseHighlights.map(item => (
                            <Card key={item.title} className={cn("text-center", isDark ? "bg-gray-800 border-gray-700" : "bg-white")}>
                                <CardHeader className="items-center">
                                    <div className={cn("p-3 rounded-lg mb-4", isDark ? "bg-blue-900/50" : "bg-blue-100")}>
                                      <item.icon className={cn("w-8 h-8", isDark ? "text-blue-400" : "text-blue-600")} />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={cn(isDark ? "text-gray-400" : "text-gray-600")}>{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="training-pricing" className={cn(
                  "py-16 px-4",
                  isDark ? "bg-gray-800/50" : "bg-gray-100"
                )}>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
                         <p className={cn("text-lg", isDark ? "text-gray-300" : "text-gray-600")}>Choose the plan that's right for you.</p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {pricingTiers.map(tier => {
                            const TierIcon = tier.icon;
                            return (
                                <Card key={tier.title} className={cn(
                                    "flex flex-col border-2 relative",
                                    isDark ? "bg-gray-800 border-blue-700/50" : "bg-white border-blue-500/50"
                                )}>
                                    {tier.isPopular && (
                                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1">
                                            Most Popular
                                        </Badge>
                                    )}
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className={cn("p-4 rounded-full", isDark ? "bg-blue-900/30" : "bg-blue-100")}>
                                                <TierIcon className={cn("w-8 h-8", isDark ? "text-blue-400" : "text-blue-600")} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-2xl">{tier.title}</CardTitle>
                                                <CardDescription>{tier.duration}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-4xl font-bold mb-6">{tier.price}</p>
                                        <ul className="space-y-3 text-left">
                                            {tier.features.map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transform hover:scale-105 transition-transform duration-200">
                                            <a href="#training-form">Get More Details</a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                {/* Form Section */}
                <section id="training-form" className="py-20 px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                            <p className={cn("text-lg", isDark ? "text-gray-300" : "text-gray-600")}>
                                Fill out this form and we'll reach out to you with more available options, suggestions, or to discuss your specific requirements.
                            </p>
                        </div>
                        <TrainingInquiryForm />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Training;
