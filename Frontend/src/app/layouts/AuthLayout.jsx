import { ArrowUpRight, MessagesSquare, ShieldCheck } from "lucide-react";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="grid min-h-svh grid-cols-1 bg-white font-[DM_Sans] text-[#24342d] md:grid-cols-2">
      <section className="flex justify-center overflow-hidden bg-[#edf4ee] bg-[linear-gradient(rgba(59,118,93,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,118,93,0.035)_1px,transparent_1px)] bg-size-[32px_32px] px-[7%] py-7 sm:py-9.5" aria-label="Mingle chat preview">
        <div className="flex w-full max-w-142.5 flex-col items-start">
          <Link className="inline-flex items-center gap-2.5 font-[Manrope] text-xl font-extrabold text-[#24342d] no-underline" to="/" aria-label="Mingle home">
            <span className="grid size-9 place-items-center rounded-[10px] bg-[#3b765d] text-white"><MessagesSquare size={20} strokeWidth={2.2} /></span>
            <span>Mingle</span>
          </Link>

          <div className="mt-10 sm:mt-[8vh]">
            <p className="mb-3.25 text-[11px] font-bold tracking-[1.2px] text-[#3b765d]">A LITTLE CLOSER, EVERY DAY</p>
            <h1 className="m-0 font-[Manrope] text-[32px] leading-[1.16] font-bold text-[#263a31] sm:text-[36px] lg:text-[42px]">Good conversations<br />make <em className="text-[#3b765d] not-italic">great days.</em></h1>
            <p className="mt-4.25 max-w-97.5 text-[15px] leading-[1.7] text-[#68766e]">
              The little moments matter. Make room for more of them with the people you love.
            </p>
          </div>

          <div className="mt-7 w-full max-w-102.5 overflow-hidden rounded-xl border border-[#305441]/10 bg-white shadow-[0_22px_55px_rgba(41,73,54,0.12)] sm:ml-5 sm:rotate-[-1.3deg]" aria-label="A preview of a conversation">
            <div className="flex min-h-17 items-center gap-2.75 border-b border-[#eef1ee] px-4.25 py-3">
              <div className="grid size-9.5 shrink-0 place-items-center rounded-full bg-[#d88d72] font-[Manrope] text-sm font-bold text-white">M</div>
              <div className="flex flex-1 flex-col gap-0.75">
                <strong className="text-[13px] font-bold">Maya Chen</strong>
                <span className="flex items-center gap-1.25 text-[11px] text-[#849087]"><i className="size-1.5 rounded-full bg-[#72aa79]" /> online now</span>
              </div>
              <button className="border-0 bg-transparent text-[23px] leading-none text-[#758179]" type="button" aria-label="More conversation options">···</button>
            </div>
            <div className="flex min-h-54.5 flex-col items-start gap-2.75 bg-[#fcfdfb] px-4.25 py-4">
              <span className="mb-0.5 self-center text-[9px] font-bold tracking-[0.8px] text-[#9aa39d]">TODAY, 10:42 AM</span>
              <div className="max-w-[79%] rounded-[12px_12px_12px_3px] bg-[#eff3ef] px-3.25 py-2.5 text-xs leading-[1.45] text-[#45534b]">Hey! Are we still on for coffee?</div>
              <div className="max-w-[79%] self-end rounded-[12px_12px_3px_12px] bg-[#4b8065] px-3.25 py-2.5 text-xs leading-[1.45] text-white">Wouldn’t miss it ☕ See you soon!</div>
              <div className="max-w-[72%] rounded-[12px_12px_12px_3px] bg-[#eff3ef] px-3.25 py-2.5 text-xs leading-[1.45] text-[#45534b]">Perfect. I found a new spot ✨</div>
              <div className="mt-0.75 flex min-h-9.5 w-full items-center justify-between rounded-lg border border-[#e8ede8] bg-white py-0 pr-1.5 pl-3 text-[11px] text-[#a0aaa2]">
                <span>Write a message...</span>
                <span className="grid size-6.75 place-items-center rounded-md bg-[#4b8065] text-white"><ArrowUpRight size={15} /></span>
              </div>
            </div>
          </div>

          <p className="mt-auto flex w-full items-center justify-center gap-2 pt-6 text-medium text-[#718078]"><ShieldCheck size={16} /> Your conversations, just between you.</p>
        </div>
      </section>

      <section className="grid min-h-svh min-w-0 grid-rows-[1fr_auto] items-center justify-center px-[8%] py-10 md:px-[7%]">
        <div className="w-110 self-center"><Outlet /></div>
        <p className="justify-self-center pt-9.5 text-medium text-[#a0aaa3]">A good chat can change your whole day.</p>
      </section>
    </main>
  );
};

export default AuthLayout;
