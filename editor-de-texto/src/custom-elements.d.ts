import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            word: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
            paragraph: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
            letter: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}