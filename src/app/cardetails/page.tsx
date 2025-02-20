"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, ChevronLeft, ChevronRight, Download, Search, Bell, Gavel, Clock, MoreHorizontal } from "lucide-react";
import { FaGasPump, FaCar, FaShippingFast, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Faqdescription from "@/components/faqdescription"
import SimilarVehiclesSlider from "@/components/similarvehicles";

const carDetails = {
  name: "2016 Audi A6 Premium Plus",
  price: "$8,500 USD",
  seller: "Audi Financial Services",
  location: {
    yard: "Copart NJ - Yard 12",
    city: "Trenton",
    state: "New Jersey", 
    country: "USA"
  },
  runAndDrive: true,
  hasKey: true,
  fuelType: "Gas",
  images: [
    "/images/1 (1).jpg",
    "/images/1 (2).jpg",
    "/images/1 (3).jpg",
    "/images/1 (4).jpg",
    "/images/1 (5).jpg",
    "/images/1 (6).jpg",
    "/images/1 (7).jpg",
    "/images/1 (8).jpg",
    "/images/1 (9).jpg",
    "/images/1 (10).jpg",
  ],
  specs: {
    "Lot Number": "41593405",
    VIN: "WAUFGAFCXGN******",
    "Title Code": "NJ - Certificate of Title",
    Odometer: "215,657 mi (ACTUAL)",
    "Primary Damage": "Normal Wear",
    "Secondary Damage": "Minor Dent/Scratches",
    "Estimated Retail Value": "$9,700.00 USD",
    Cylinders: "6",
    "Body Style": "Sedan 4D",
    Color: "Blue",
    "Engine Type": "3.0L 6",
    Transmission: "Automatic",
    Drive: "All Wheel Drive",
  },
  saleInfo: {
    date: "2024-02-15T14:00:00",
    lane: "A5",
    itemNumber: "12345",
    saleStatus: "No Reserve"
  }
};

export default function CarDetailsPage() {
  const [mounted, setMounted] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [bidAmount, setBidAmount] = useState(8500);
  const [timeLeft, setTimeLeft] = useState(3600 * 24 * 3 + 3600 * 23 + 58 * 60 + 30);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bidType, setBidType] = useState<'normal' | 'max' | 'monster'>('normal');
  const [shippingZip, setShippingZip] = useState('');
  const [shippingType, setShippingType] = useState<'domestic' | 'international'>('domestic');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mainSwiper, setMainSwiper] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleThumbnailClick = (index: number) => {
    if (mainSwiper) {
      (mainSwiper as any).slideTo(index);
      setCurrentImageIndex(index);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-8">
          
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl">
              <div className="relative group">
                <Swiper
                  onSwiper={(swiper) => setMainSwiper(swiper as any)}
                  spaceBetween={0}
                  navigation={{
                    prevEl: '.main-prev',
                    nextEl: '.main-next',
                  }}
                  modules={[Navigation, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
                >
                  {carDetails.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div 
                        className="aspect-[4/3] relative overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        style={{ cursor: 'none' }}
                      >
                        <Image
                          src={img}
                          alt={`${carDetails.name} - Image ${idx + 1}`}
                          fill
                          className="object-cover"
                          priority
                        />
                        {isHovering && (
                          <div 
                            className="absolute w-[200px] h-[200px] rounded-full border-2 border-white pointer-events-none z-50 overflow-hidden"
                            style={{
                              left: `${mousePosition.x}%`,
                              top: `${mousePosition.y}%`,
                              transform: 'translate(-50%, -50%)',
                            }}
                          >
                            <Image
                              src={img}
                              alt={`Zoomed ${carDetails.name} - Image ${idx + 1}`}
                              fill
                              className="object-cover "
                              style={{
                                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                                transform: 'scale(3)',
                              }}
                              priority
                            />
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                  <button className="main-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button className="main-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </Swiper>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 z-10"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"
                    }`}
                  />
                </motion.button>
              </div>

              <div className="p-4">
                <Swiper
                  onSwiper={(swiper) => setThumbsSwiper(swiper as any)}
                  spaceBetween={8}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  modules={[Navigation, Pagination, Thumbs]}
                  navigation={{
                    nextEl: '.thumb-next',
                    prevEl: '.thumb-prev',
                  }}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                  }}
                  breakpoints={{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 4 }
                  }}
                  className="thumbnail-swiper relative"
                >
                  {carDetails.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div 
                        className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ${
                          currentImageIndex === idx ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => handleThumbnailClick(idx)}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="thumb-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-sm cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                  <div className="thumb-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-sm cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="swiper-pagination mt-4"></div>
                </Swiper>
              </div>
            </div>

            {/* Shipping Estimate Section */}
            <Card className="mt-8 bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">Shipping Estimate</h3>
                <div className="flex gap-2 mb-3">
                  <Button
                    variant={shippingType === 'domestic' ? 'default' : 'outline'}
                    onClick={() => setShippingType('domestic')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Domestic
                  </Button>
                  <Button
                    variant={shippingType === 'international' ? 'default' : 'outline'}
                    onClick={() => setShippingType('international')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    International
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter ZIP Code"
                    value={shippingZip}
                    onChange={(e) => setShippingZip(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Calculate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Vehicle Details */}
          <div className="lg:col-span-3 xl:col-span-3">
            <Card className="h-full bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-foreground mb-6">{carDetails.name}</h1>
                
                <div className="space-y-4">
                  {Object.entries(carDetails.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground font-medium">{key}</span>
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg">
                    <FaCar className="text-blue-600" />
                    <span className="text-blue-600 font-medium">Run & Drive</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg">
                    <FaGasPump className="text-blue-600" />
                    <span className="text-blue-600 font-medium">Keys: Yes</span>
                  </div>
                </div>

                <Button className="w-full mt-6 gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-5 h-5" /> Download Build Sheet
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Bid Information */}
          <div className="lg:col-span-3 xl:col-span-3">
            <Card className="h-full bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Highest Bid</p>
                  <h2 className="text-4xl font-bold text-foreground">{carDetails.price}</h2>
                  <div className="flex items-center justify-center gap-2 mt-4 text-red-500">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{Math.floor(timeLeft / 3600)}h {Math.floor((timeLeft % 3600) / 60)}m left</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(Number(e.target.value))}
                    className="text-lg font-bold text-center"
                    min={8500}
                    step={25}
                  />

                  <div className="grid grid-cols-3 gap-2">
                    {['normal', 'max', 'monster'].map((type) => (
                      <Button
                        key={type}
                        variant={bidType === type ? 'default' : 'outline'}
                        onClick={() => setBidType(type as typeof bidType)}
                        className={`capitalize ${bidType === type ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>

                  <Button className="w-full font-bold py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white">
                    <Gavel className="w-6 h-6 mr-2" /> Place Bid Now
                  </Button>

                  <div className="mt-8 space-y-6">
                    {/* Sale Information Section */}
                    <div className="border-t border-border pt-4">
                      <h3 className="font-bold text-foreground mb-3">Sale Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sale name:</span>
                          <span className="text-foreground">AK - ANCHORAGE</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sale location:</span>
                          <span className="text-foreground">AK - ANCHORAGE</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sublot location:</span>
                          <div className="text-foreground mt-1">
                            Copart Yard 353<br />
                            8400 ARLON STREET<br />
                            ANCHORAGE AK 99507
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sale date:</span>
                          <span className="text-foreground">Wed. Feb 19, 2025<br />01:00 AM PKT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lane/Item:</span>
                          <span className="text-foreground">B/2006</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last updated:</span>
                          <span className="text-foreground">02/15/2025 6:47 am</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
    <div>
      <Faqdescription/>
    </div>
    <div>
      <SimilarVehiclesSlider/>
    </div>
    </>
  );
}
