import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-7 bg-gradient-to-b from-white to-[#fff9b1] text-black px-5 py-2">
            <div className="flex md:flex-row flex-col gap-10">
                <div className="md:w-1/3 w-full flex items-center justify-center">
                    <Image
                        src="/asserts/1.png"
                        height={600}
                        width={300}
                        alt="trophy"
                        className="mt-20 lg:h-[80vh] md:h-[35vh] h-80 w-fit"
                    />
                </div>
                <div className="flex flex-col gap-5 md:w-2/3 w-full">
                    <Image
                        src="/asserts/logo.png"
                        height={130}
                        width={200}
                        alt="logo"
                        className=""
                    />
                    <div className="text-sm">
                        <div className="font-bold mb-2">
                            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION
                            AWARD 2018 for the 4th time.
                        </div>
                        <ul className="list-disc pl-8 font-medium">
                            <li>
                                C.R.I.&apos;s energy efficient products are well
                                recognized by various Government Institutions,
                                as trustworthy products for various projects
                                across the globe to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor in the country
                                for the projects of EESL (Energy Efficiency
                                Services Limited) to replace the old inefficient
                                pumps with 5 Star rated energy efficient smart
                                pumps with IoT enabled control panel.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="/asserts/2.png"
                            height={600}
                            width={600}
                            alt="award"
                            className="w-full h-72"
                        />
                    </div>
                    <p className="text-sm font-medium">
                        Government of India has awarded the{" "}
                        <span className="font-bold">
                            &quot;National Energy Conservation Award 2018&quot;
                        </span>
                        . Mr. G. Selvaraj, Joint Managing Director of C.R.I.
                        Group received the award from Smt. Sumitra Mahajan,
                        Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                        Minister of State.
                    </p>
                </div>
            </div>
            <p className="text-xs text-center font-medium">
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
                RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION
                UNITS OF POWER FOR THE NATION.
            </p>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/asserts/3.png"
                    height={1000}
                    width={1000}
                    alt="award"
                    className="md:w-4/5 w-full h-fit mb-2 object-contain"
                />
                <span className="text-xs text-center font-medium">
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires &
                    Cables - Solar Systems - Motors
                </span>
            </div>
            <hr className="h-[3px] bg-[#ec3237] -mt-5" />
            <div className="flex flex-col items-center justify-center gap-5 text-sm">
                <h2 className="font-bold text-center">
                    C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </h2>
                <span className="font-medium text-center">
                    CHEMICALS & PROCESS{" "}
                    <span className="text-[#ec3237]">|</span> POWER{" "}
                    <span className="text-[#ec3237]">|</span> WATER & WASTE
                    WATER <span className="text-[#ec3237]">|</span> OILS & GAS{" "}
                    <span className="text-[#ec3237]">|</span>
                    PHARMA <span className="text-[#ec3237]">|</span> SUGARS &
                    DISTILLERIES <span className="text-[#ec3237]">|</span> PAPER
                    & PULP <span className="text-[#ec3237]">|</span> MARINE &
                    DEFENCE <span className="text-[#ec3237]">|</span>
                    METAL & MINING <span className="text-[#ec3237]">
                        |
                    </span>{" "}
                    FOOD & BEVERAGE <span className="text-[#ec3237]">|</span>{" "}
                    PETROCHEMICAL & REFINERIES{" "}
                    <span className="text-[#ec3237]">|</span>
                    SOLAR <span className="text-[#ec3237]">
                        |
                    </span> BUILDING <span className="text-[#ec3237]">|</span>{" "}
                    HVAC <span className="text-[#ec3237]">|</span> FIRE FIGHTING{" "}
                    <span className="text-[#ec3237]">|</span> AGRICULTURE &
                    RESIDENTIAL
                </span>
            </div>
            <div className=" bg-[#ec3237] text-white text-sm md:h-20 h-32 w-full grid md:grid-cols-3 grid-cols-1">
                <div className="flex justify-center items-center">
                    <svg
                        className="svg-icon -mt-3"
                        style={{
                            width: "1.5em",
                            height: "1.5em",
                            verticalAlign: "middle",
                            fill: "currentColor",
                            overflow: "hidden",
                        }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M513 63.868c-247.519 0-448.177 200.654-448.177 448.177 0 247.519 200.658 448.177 448.177 448.177s448.177-200.658 448.177-448.177c0-247.522-200.658-448.177-448.177-448.177z m215.252 693.101c-236.958 27.438-409.066-192.063-466.435-321.765-48.461-109.562 24.106-174.632 47.808-192.199 4.282-3.169 9.463-4.852 14.79-4.852h35.731a24.936 24.936 0 0 1 22.902 15.07l50.449 117.04a24.942 24.942 0 0 1-2.268 23.88l-31.867 46.967c-5.063 7.459-5.663 17.05-1.698 25.147 47.914 97.782 154.148 148.552 194.7 164.942 9.55 3.864 20.491 1.404 27.521-6.131l46.141-49.434a24.95 24.95 0 0 1 28.739-5.607l110.611 51.355c8.305 3.856 13.904 11.953 14.406 21.091 4.962 89.813-91.53 114.496-91.53 114.496z" />
                    </svg>
                    Toll free{" "}
                    <span className="font-bold ml-1">1800 200 1234</span>
                </div>
                <div className="flex justify-center items-center">
                    <svg
                        enable-background="new 0 0 56.693 56.693"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 56.693 56.693"
                        style={{
                            width: "1.5em",
                            height: "1.5em",
                            verticalAlign: "middle",
                            fill: "currentColor",
                            overflow: "hidden",
                        }}
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mt-3"
                    >
                        <path d="M28.347,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.625-11.023,24.625-24.623  C52.972,16.184,41.946,5.157,28.347,5.157z M34.864,29.679h-4.264c0,6.814,0,15.207,0,15.207h-6.32c0,0,0-8.307,0-15.207h-3.006  V24.31h3.006v-3.479c0-2.49,1.182-6.377,6.379-6.377l4.68,0.018v5.215c0,0-2.846,0-3.398,0c-0.555,0-1.34,0.277-1.34,1.461v3.163  h4.818L34.864,29.679z" />
                    </svg>
                    www.facebook.com/cripumps
                </div>
                <div className="flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            width: "1.5em",
                            height: "1.5em",
                            verticalAlign: "middle",
                            fill: "currentColor",
                            overflow: "hidden",
                        }}
                        viewBox="0 0 24 24"
                        className="-mt-3"
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                    </svg>
                    www.crigroups.com
                </div>
            </div>
        </main>
    );
}
