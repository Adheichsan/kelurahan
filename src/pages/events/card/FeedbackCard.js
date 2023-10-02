import React, { useState } from "react";
import { Container } from "@smarteye/optic";
import Link from "next/link";
import EmoteButton from "./EmoteButton";
import Image from "next/image";

import { PrismaClient } from "@prisma/client";

function FeedbackCard() {
    const prisma = new PrismaClient();

    const [feedbackData, setFeedbackData] = useState({
        rating: "",
        review: "",
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const createFeedback = async () => {
        try {
            const create = await prisma.feedback.create({
                data: {
                    rating: feedbackData.rating,
                    review: feedbackData.review,
                },
            });
            return create;
        } catch (error) {
            console.log(error);
            return []
        }
    };

    const handleSubmit = async () => {
        try {
            if (!feedbackData.rating || !feedbackData.review) {
                alert("Mohon isi rating dan review sebelum mengirim feedback.");
                return;
            }

            console.log(prisma);
            console.log("isPopupOpen before setState:", isPopupOpen);
            const createdFeedback = await createFeedback();
            console.log(createdFeedback);

            setIsPopupOpen(true);

            console.log("Feedback berhasil dikirim:", createdFeedback);
        } catch (error) {
            console.error("Terjadi kesalahan saat mengirim feedback:", error);
        }
    };


    const handleEmoteClick = (rating) => {
        setFeedbackData({ ...feedbackData, rating });
    };

    const handleReviewChange = (event) => {
        const newReview = event.target.value;
        setFeedbackData({ ...feedbackData, review: newReview });
    };

    console.log(feedbackData);

    return (
        <div className="items-center justify-content-center">
            <div className="flex items-center justify-center py-2">
                <Container
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
                    style={{
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "200px",
                    }}
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Beri Feedback
                    </h5>
                    <p className="mb-2 text-center">
                        Apa ulasan yang didapat tentang pengalaman virtual reality yang
                        telah diberikan?
                    </p>
                    <div>
                        <div className="flex justify-center py-4">
                            <EmoteButton
                                imageSrc="/icons/Layer_1.png"
                                onClick={() => handleEmoteClick("buruk")}
                            />
                            <EmoteButton
                                imageSrc="/icons/Layer_1 (2).png"
                                onClick={() => handleEmoteClick("kurang")}
                            />
                            <EmoteButton
                                imageSrc="/icons/Layer_1 (3).png"
                                onClick={() => handleEmoteClick("cukup")}
                            />
                            <EmoteButton
                                imageSrc="/icons/Layer_1 (1).png"
                                onClick={() => handleEmoteClick("bagus")}
                            />
                            <EmoteButton
                                imageSrc="/icons/Layer_1 (4).png"
                                onClick={() => handleEmoteClick("keren")}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Rating"
                            value={feedbackData.rating}
                            onChange={handleReviewChange}
                        />
                    </div>
                    <p className="mb-3 text-center">
                        Apa ulasan yang didapat tentang pengalaman virtual reality yang
                        telah diberikan?
                    </p>
                    <div>
                        <textarea
                            placeholder="Uraikan pendapatmu"
                            style={{ width: "300px", height: "100px" }}
                            value={feedbackData.review}
                            onChange={handleReviewChange}
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex px-3 py-5">
                            <Link
                                href="/events/done/finish"
                                className="px-4 py-2 mt-4 font-bold bg-white rounded text-slate-600 hover:bg-slate-300"
                                style={{ border: "1px solid #000" }}
                            >
                                Cancel
                            </Link>
                        </div>
                        <div className="py-5">
                            <button
                                onClick={async () => await handleSubmit()}
                                className="px-4 py-2 mt-4 font-bold text-white rounded bg-slate-500 hover:bg-slate-600"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Popup */}
                    {isPopupOpen && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <Image
                                    src="/icons/Frame.png"
                                    width={80}
                                    height={80}
                                    alt="popup"
                                    style={{
                                        display: "block",
                                        margin: "0 auto",
                                    }}
                                    className="py-5"
                                />
                                <h1 className="text-2xl font-bold text-center text-slate-600">
                                    Terimakasih!
                                </h1>
                                <p className="text-center">
                                    Kamu sudah menyelesaikan sesi di ruangan ini.
                                    <br />
                                    Jika ingin melakukan sesi lagi, kamu bisa memilih ruangan
                                    lagi.
                                </p>
                                <div
                                    className="flex items-center justify-center py-5 flex-column"
                                    style={{ flexDirection: "column" }}
                                >
                                    <Link
                                        href="/"
                                        className="px-20 py-2 mx-2 mt-4 font-bold text-white rounded bg-slate-500 hover:bg-slate-600"
                                    >
                                        Kembali ke lobby
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default FeedbackCard;
