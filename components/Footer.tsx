"use client";
import { Github, Instagram, Linkedin, Lock, Mail, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer>
      {/* <hr className="bg-gray-300 h-[1px]" /> */}
      <div className="justify-between flex items-center">
        <div className="flex gap-1 my-3 opacity-60">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNBfbDDHHzMjzkZmkqQfBbKvWrrPbkBXjbcdfnlFhqhFSsbzgDKMnDNrlSVNffTPBrT"
            target="_blank"
          >
            <Mail size={18}></Mail>
          </a>
          /
          <a href="https://www.linkedin.com/in/tanishqkrk/" target="_blank">
            <Linkedin size={18}></Linkedin>
          </a>
          /
          <a href="http://github.com/tanishqkrk/" target="_blank">
            <Github size={18}></Github>
          </a>
          /
          <a href="https://instagram.com/tanishqkrkaushal/" target="_blank">
            <Instagram size={18}></Instagram>
          </a>
          /
          <a href="https://twitter.com/tanishqkrk" target="_blank">
            <Twitter size={18}></Twitter>
          </a>
        </div>
        <div className="flex items-center gap-3 max-sm:flex-col max-sm:hidden">
          <div className="w-3 h-3 bg-red"></div>
          <div className="w-3 h-3 bg-green"></div>
          <div className="w-3 h-3 bg-blue"></div>
          <div className="w-3 h-3 bg-yellow"></div>
          <div className="w-3 h-3 bg-background outline-1 outline-white outline-double"></div>
          <div className="w-3 h-3 bg-foreground"></div>
        </div>
        <div className="text-sm opacity-60 flex items-center gap-1">
          <Lock size={16}></Lock>
          <span>
            READ-ONLY: <span className="text-orange-200">TRUE</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
