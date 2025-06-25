import { MapPin, Star, Users, Wheat } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const StatsSection = () => {
    const stats = [
        { number: '5,000+', label: 'Petani Jagung Terdaftar', icon: Users },
        { number: '25,000+', label: 'Ton Jagung Terdistribusi', icon: Wheat },
        { number: '150+', label: 'Kabupaten Terjangkau', icon: MapPin },
        { number: '98%', label: 'Tingkat Kepuasan Petani', icon: Star }
    ];

    return (
        <section id="stats" className="py-16 bg-gradient-to-r from-green-600 to-yellow-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Dampak Nyata untuk Petani Jagung Indonesia
                    </h2>
                    <p className="text-green-100 text-lg">
                        Bergabung dengan komunitas petani jagung yang telah merasakan manfaatnya
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <stat.icon className="w-8 h-8 mb-3 text-yellow-200" />
                            <p className="text-4xl font-bold mb-2">{stat.number}</p>
                            <p className="text-green-100">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;