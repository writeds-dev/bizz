import ScrollBaseAnimation from '../../components/uilayouts/scroll-text-marque';

function Rem() {
  return (
    <>
      <div className="h-[200px] w-full bg-black flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4">
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={-3}
            clasname="font-bold text-6xl tracking-[-0.07em] leading-[90%] text-center">
            Innovative Web Solutions for Your Business
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={3}
            clasname="font-bold text-6xl tracking-[-0.07em] leading-[90%] text-center">
            Transform Your Ideas into Stunning Websites
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={-3}
            clasname="font-bold text-6xl tracking-[-0.07em] leading-[90%] text-center">
            Elevate Your Brand with Professional Design
          </ScrollBaseAnimation>
        </div>
      </div>
    </>
  );
}

export default Rem;
