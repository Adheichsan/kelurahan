import { useEffect, useState } from "react";
import { Container } from "@smarteye/optic";
import Link from "next/link";
import EmoteButton from "./EmoteButton";
import Image from "next/image";

function FeedbackCard() {
    const [rating, setRating] = useState("");
    const [userReview, setUserReview] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openDB = () => {
        return new Promise((resolve, reject) => {
            const dbName = "smarteyedb";
            const dbVersion = 1;

            const request = window.indexedDB.open(dbName, dbVersion);

            request.onerror = (event) => {
                console.error("Gagal membuka basis data:", event.target.error);
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const store = db.createObjectStore("feedbackStore", {
                    keyPath: "id",
                    autoIncrement: true,
                });
            };
        });
    };

    const readDataFromDB = async () => {
        try {
            const db = await openDB();
            const transaction = db.transaction("feedbackStore", "readonly");
            const store = transaction.objectStore("feedbackStore");
            const data = await store.getAll();
            console.log("Data dari IndexedDB:", data);
        } catch (error) {
            console.error("Gagal membaca data dari IndexedDB:", error);
        }
    };


    const saveDataToDB = async (data) => {
        try {
            const db = await openDB();
            const transaction = db.transaction("feedbackStore", "readwrite");
            const store = transaction.objectStore("feedbackStore");
            const request = store.add(data);
            request.onsuccess = () => {
                console.log("Data berhasil disimpan di IndexedDB");
            };
        } catch (error) {
            console.error("Gagal menyimpan data ke IndexedDB:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            if (!rating || !userReview) {
                alert("Mohon isi rating dan review sebelum mengirim feedback.");
                return;
            }

            const feedbackData = {
                rating,
                review: userReview,
            };

            await saveDataToDB(feedbackData);

            setIsPopupOpen(true);

            console.log("Feedback berhasil dikirim:", feedbackData);
        } catch (error) {
            console.error("Terjadi kesalahan saat mengirim feedback:", error);
        }
    };


    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleUserReviewChange = (event) => {
        setUserReview(event.target.value);
    };

    const handleEmoteClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const EmoteButton = ({ imageSrc, grayImageSrc, className, onClick, width, height }) => {
        return (
            <img
                src={rating === imageSrc ? grayImageSrc : imageSrc}
                alt="Emote"
                className={className}
                onClick={onClick}
                style={{ width, height }}
            />
        );
    };

    useEffect(() => {
        readDataFromDB();
    }, []);

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
                                imageSrc="/emoji/cry.png"
                                grayImageSrc="/icons/gray_Layer_1.png"
                                className={`hover-effect ${rating === "Buruk" ? "selected" : ""}`}
                                onClick={() => handleEmoteClick("Buruk")}
                                width={50}
                                height={50}
                            />
                            <EmoteButton
                                imageSrc="/emoji/sad.png"
                                grayImageSrc="/icons/gray_Layer_1.png"
                                className={`hover-effect ${rating === "Kurang" ? "selected" : ""}`}
                                onClick={() => handleEmoteClick("Kurang")}
                                width={50}
                                height={50}
                            />
                            <EmoteButton
                                imageSrc="/emoji/confused.png"
                                grayImageSrc="/icons/gray_Layer_1.png"
                                className={`hover-effect ${rating === "Cukup" ? "selected" : ""}`}
                                onClick={() => handleEmoteClick("Cukup")}
                                width={50}
                                height={50}
                            />
                            <EmoteButton
                                imageSrc="/emoji/happy.png"
                                grayImageSrc="/icons/gray_Layer_1.png"
                                className={`hover-effect ${rating === "Bagus" ? "selected" : ""}`}
                                onClick={() => handleEmoteClick("Bagus")}
                                width={50}
                                height={50}
                            />
                            <EmoteButton
                                imageSrc="/emoji/superstar.png"
                                grayImageSrc="/icons/gray_Layer_1.png"
                                className={`hover-effect ${rating === "Keren" ? "selected" : ""}`}
                                onClick={() => handleEmoteClick("Keren")}
                                width={50}
                                height={50}
                            />
                        </div>
                        {/* <div className="rating-emoji">
                            {rating === "Buruk" && <span>😞</span>}
                            {rating === "Kurang" && <span>😐</span>}
                            {rating === "Cukup" && <span>😊</span>}
                            {rating === "Bagus" && <span>😃</span>}
                            {rating === "Keren" && <span>😎</span>}
                        </div> */}
                        {/* <input
                            type="text"
                            placeholder="Rating"
                            value={rating}
                            onChange={handleRatingChange}
                        /> */}
                    </div>
                    <p className="mb-3 text-center">
                        Berikan alasan mengenai ulasan yang telah diberikan
                    </p>
                    <div>
                        <textarea
                            placeholder="Uraikan pendapatmu"
                            style={{ width: "300px", height: "100px" }}
                            value={userReview}
                            onChange={handleUserReviewChange}
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
                                // onClick={async () => await handleSubmit()}
                                onClick={handleSubmit}
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
                                {/* <div>
                                    <h2>Rating:</h2>
                                    <p>{rating}</p>
                                </div>
                                <div>
                                    <h2>Review:</h2>
                                    <p>{userReview}</p>
                                </div> */}

                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default FeedbackCard;
