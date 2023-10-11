import { Col, Container, Row } from "@smarteye/optic";
import React from "react";
import Image from "next/image";

function Aboutpages() {
    return (
        <div className="pt-18">
            <div className="relative">
                <div
                    style={{
                        backgroundImage: "url('/about/11111.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50vh",
                        width: "100%",
                    }}
                    className="bg-center bg-cover h-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2"
                >
                <Row className="flex flex-col pt-10">
                    <Col>
                        <h1 className="pt-10 mt-10 ml-8 text-4xl font-extrabold text-center text-slate-500">
                        Smarteye.id
                        </h1>
                        <h3 className="mt-4 ml-8 text-lg font-bold text-center text-black">
                            Wujudkan imajinasi anda menjadi kenyataan bersama kami, <br/>
                            dengan teknologi virtual dan augmented reality.
                        </h3>
                    </Col>
                </Row>
                </div>
            </div>

            <div className="px-5 py-20">
                <Container>
                    <Row>
                        <Col className="px-5 py-5 md:w-1/2">
                            <h1 className="text-3xl font-bold">
                                Who are we?
                            </h1>
                        </Col>
                        <Col className="px-5 py-5 md:w-1/2">
                            <p>
                                Immersive Technology Solution Provider, focusing on Next-Gen Virtual Training, Virtual Expo, and Virtual Marketing powered by own engine.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="py-20 mx-auto about_description">
                <Container>
                    <Row>
                        <Col>
                        <h1 className="text-2xl font-bold text-center">Strategic Customer</h1>
                        </Col>
                    </Row>
                    <Row className="flex justify-center py-2">
                        <Image 
                            src='/clients/Telkom-logo.png'
                            width={150}
                            height={150}
                            alt="telkom"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/AHM-logo.png'
                            width={150}
                            height={150}
                            alt="AHM"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/DHL-logo.png'
                            width={150}
                            height={150}
                            alt="DHL"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/Loreal-logo.png'
                            width={150}
                            height={150}
                            alt="Loreal"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/Pertamina-logo.png'
                            width={150}
                            height={150}
                            alt="Pertamina"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/Peruri-logo.png'
                            width={150}
                            height={150}
                            alt="Peruri"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoPertaminaGas.png'
                            width={300}
                            height={300}
                            alt="Pertamina Gas"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/SCJohsonLogo.png'
                            width={150}
                            height={150}
                            alt="SC-Johnson"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/Logociputra.png'
                            width={150}
                            height={150}
                            alt="WahanaVisi"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoSkkmigas.png'
                            width={150}
                            height={150}
                            alt="skk migas"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/logoSummarecon.png'
                            width={150}
                            height={150}
                            alt="summarecon"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/logoAdmedika.png'
                            width={150}
                            height={150}
                            alt="Admedika"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoTelkomProperty.png'
                            width={150}
                            height={150}
                            alt="Telkom Property"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoTelkomsel.png'
                            width={150}
                            height={150}
                            alt="Telkomsel"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoPPurban.png'
                            width={150}
                            height={150}
                            alt="Urban PP"
                            className="object-contain"
                        />
                        <Image 
                            src='/clients/LogoToyota.png'
                            width={150}
                            height={150}
                            alt="Toyota"
                            className="object-contain"
                        />
                    </Row>
                </Container>
            </div>

            <div className="py-20">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-2xl font-bold text-center">
                                Achievements
                            </h1>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <Col>
                            <ol className="text-center">
                                <li className="py-3">VR Innovation Indonesia Win 1st Position in Paris for Global <span className="font-bold">LOreal</span> VR Competition</li>
                                <li className="py-3">VR Innovation enter the final stage for <span className="font-bold">Pertamina</span> Group innovation competition</li>
                                <li className="py-3">VR Innovation goes to Dubai <span className="font-bold">(SKK Migas)</span></li>
                                <li className="py-3">The first AR Games at US Embassy - Indonesia <span className="font-bold">(@america)</span></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Aboutpages;
