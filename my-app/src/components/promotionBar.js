import { motion } from "framer-motion";

const NewsTicker = () => {
  return (
    <div className="fixed z-[51] h-[10px] w-full inset-0">
    <div className="bg-red-600 text-white overflow-hidden relative">
      <motion.div
        className="whitespace-nowrap font-semibold"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
        🎉 Get 14% OFF on all products till February 14! Shop Now! ❤️ 🎁
      </motion.div>
    </div>
          </div>
  );
};

export default NewsTicker;
