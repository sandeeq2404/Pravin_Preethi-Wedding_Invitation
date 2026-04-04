import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  onReveal: () => void;
};

export default function ScratchCircle({ value, onReveal }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill gold
    ctx.fillStyle = "#d4af37";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isDrawing = false;

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      scratch(x, y);

      // Calculate scratch percentage
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let cleared = 0;

      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) cleared++;
      }

      const percent = cleared / (canvas.width * canvas.height);

      // Auto reveal at 40%
      if (percent > 0.4 && !revealed) {
        setRevealed(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onReveal();
      }
    };

    const start = () => (isDrawing = true);
    const end = () => (isDrawing = false);

    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointerleave", end);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", start);
      canvas.removeEventListener("pointerup", end);
      canvas.removeEventListener("pointerleave", end);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [revealed, onReveal]);

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">

      {/* TEXT */}
      <span className="absolute text-2xl font-serif text-teal-900">
        {value}
      </span>

      {/* SCRATCH LAYER */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          width={120}
          height={120}
          className="absolute rounded-full cursor-pointer shadow-lg"
        />
      )}
    </div>
  );
}