import { useEffect } from "react"

export const useClickOutside = <T extends HTMLElement>(
    ref: React.RefObject<T>,
    onClickOutside: () => void,
    enabled: boolean
): void =>{
    useEffect(() =>{

        if(!enabled) return

        const handelClick = (e: MouseEvent) => {
            const target = e.target
            if(target instanceof Node && !ref.current?.contains(target)) {
                onClickOutside()
            }
        }

        window.addEventListener("click", handelClick)

        return () => {
            window.removeEventListener("click", handelClick)
        }

    }, [enabled, ref, onClickOutside])
  }