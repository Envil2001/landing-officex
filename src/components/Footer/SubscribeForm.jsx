
const SubscribeForm = () => {
    return (
        <div className="space-y-10">
            <h2 className="font-bold text-2xl">Subscribe to Our Newsletter</h2>
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    className="pt-1 pb-2 w-full block transition-all duration-500 border-b border-black focus:border-gray-300 text-black"
                />
                <label htmlFor="email" className="absolute top-0 left-0 block transition-all duration-500">
                    Your Email
                </label>
            </div>
        </div>
    );
};

export default SubscribeForm;
