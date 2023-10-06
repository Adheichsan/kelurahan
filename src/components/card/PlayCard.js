import { Container } from "@smarteye/optic";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Komponen Jam Digital
function DigitalClock({ time }) {
    return <div className="text-4xl font-bold">{time}</div>;
}

function PlayCard() {
    const initialTime = 10;
    const [minutes, setMinutes] = useState(initialTime);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [redirectToNextPage, setRedirectToNextPage] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && minutes >= 0) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setIsActive(false);
                        clearInterval(interval);
                        if (redirectToNextPage) {
                            window.location.href = "/";
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, minutes, seconds, redirectToNextPage]);

    const startTimer = () => {
        setIsActive(true);
        setRedirectToNextPage(false);
    };

    const stopTimer = () => {
        setIsActive(false);
        setMinutes(initialTime);
        setSeconds(0);
        setRedirectToNextPage(true);
    };

    const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    return (
        <div className="py-3 items-center justify-content-center">
            <div className="py-10 flex justify-center items-center">
                <Container className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "200px" }}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Room Training
                    </h5>
                    <p className="mb-2 text-center">
                        Anda dapat melakukan training selama 10 menit di ruangan ini
                    </p>
                    <DigitalClock time={formattedTime} />
                    <div className="py-3">
                        {!isActive ? (
                            <button
                                onClick={startTimer}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-2 mt-4"
                            >
                                Mulai Sesi
                            </button>
                        ) : (
                            <button
                                onClick={stopTimer}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-2 mt-4"
                            >
                                Akhiri Sesi
                            </button>
                        )}
                    </div>
                    <Link 
                    href="/events/done/finish"
                    className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mx-2 mt-4">
                        Selanjutnya
                    </Link>
                </Container>
            </div>
        </div>
    );
}

export default PlayCard;
