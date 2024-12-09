import React from 'react';

const FaQ = () => {
    return (
        <div className="p-8">
            <div data-aos="zoom-out-right" className="space-y-4">
                {/* Question 1 */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800">
                    <input type="radio" name="eco-adventures-faq" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-black dark:text-white">
                        What is an eco-adventure experience?
                    </div>
                    <div className="collapse-content text-black dark:text-gray-300">
                        <p>
                            An eco-adventure experience combines adventure activities like trekking, diving, or safaris with sustainable practices that minimize environmental impact and promote conservation efforts.
                        </p>
                    </div>
                </div>
                {/* Question 2 */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800">
                    <input type="radio" name="eco-adventures-faq" />
                    <div className="collapse-title text-xl font-medium text-black dark:text-white">
                        How can I ensure my eco-adventure is environmentally friendly?
                    </div>
                    <div className="collapse-content text-black dark:text-gray-300">
                        <p>
                            To ensure your eco-adventure is environmentally friendly, choose certified eco-tour operators, avoid single-use plastics, respect local wildlife, and leave no trace behind during your trip.
                        </p>
                    </div>
                </div>
                {/* Question 3 */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800">
                    <input type="radio" name="eco-adventures-faq" />
                    <div className="collapse-title text-xl font-medium text-black dark:text-white">
                        What should I pack for an eco-adventure trip?
                    </div>
                    <div className="collapse-content text-black dark:text-gray-300">
                        <p>
                            Pack eco-friendly essentials like reusable water bottles, biodegradable toiletries, lightweight and durable gear, and appropriate clothing for the climate. Always follow the travel operator's packing list.
                        </p>
                    </div>
                </div>
                {/* Question 4 */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800">
                    <input type="radio" name="eco-adventures-faq" />
                    <div className="collapse-title text-xl font-medium text-black dark:text-white">
                        Are eco-adventures suitable for families and kids?
                    </div>
                    <div className="collapse-content text-black dark:text-gray-300">
                        <p>
                            Yes, many eco-adventures are family-friendly! Activities like guided nature walks, wildlife safaris, or eco-resorts often cater to families, offering safe and educational experiences for kids.
                        </p>
                    </div>
                </div>
                {/* Question 5 */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800">
                    <input type="radio" name="eco-adventures-faq" />
                    <div className="collapse-title text-xl font-medium text-black dark:text-white">
                        What destinations are best for eco-adventure experiences?
                    </div>
                    <div className="collapse-content text-black dark:text-gray-300">
                        <p>
                            Popular destinations for eco-adventure experiences include the Amazon Rainforest, the Himalayas, the Great Barrier Reef, African safaris, and Arctic expeditions. Choose locations that prioritize conservation and sustainability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaQ;
