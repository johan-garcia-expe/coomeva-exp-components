import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDevice } from "vtex.device-detector";
import { useCssHandles } from 'vtex.css-handles';

import './styles.css'

interface Props {
    date_countdown: string;
    active: boolean;
}

const CSS_CONTADOR = [
    'countdown__container',
    'countdown__box',
    'countdown__value',
    'countdown__label',
]

const CountDownPromos = ({ date_countdown, active }: Props) => {
    const handles = useCssHandles(CSS_CONTADOR)
    const [timeDays, setTimerDays] = useState('00');
    const [timeHours, setTimerHours] = useState('00');
    const [timeMinutes, setTimerMinutes] = useState('00');
    const [timeSeconds, setTimerSeconds] = useState('00');


    let interval = useRef<number | NodeJS.Timeout | null>(null);

    const countdownDate = useMemo(
        () => date_countdown ? new Date(date_countdown).getTime() : new Date("11-12-2025").getTime(),
        [date_countdown]
      );

    const startTimer = () => {
          
        // console.log('countdownDate', countdownDate)
        // console.log('date_countdown', date_countdown)

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                if(!interval.current ) return
                // Verifica el tipo antes de llamar a clearInterval
                if (typeof interval.current === 'number') {
                    clearInterval(interval.current);
                } else {
                    clearInterval(interval.current as NodeJS.Timeout);
                }
            } else {
                setTimerDays(days.toString().padStart(2, '0'));
                setTimerHours(hours.toString().padStart(2, '0'));
                setTimerMinutes(minutes.toString().padStart(2, '0'));
                setTimerSeconds(seconds.toString().padStart(2, '0'));
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            if(!interval.current ) return
            // Verifica el tipo antes de llamar a clearInterval
            if (typeof interval.current === 'number') {
                clearInterval(interval.current);
            } else {
                clearInterval(interval.current as NodeJS.Timeout);
            }
        }
    })

    const { isMobile } = useDevice();

    return (
        (active && countdownDate) ? (
            <div className={handles.countdown__container} >
                {   parseInt(timeDays) > 0 && (
                    <>
                        <div className={handles.countdown__box}>
                            <div className={handles.countdown__value}>{timeDays}</div>
                            <div className={handles.countdown__label}>Días</div>
                        </div>
                        :
                    </>
                )
                }
                <div className={handles.countdown__box}>
                    <div className={handles.countdown__value}>{timeHours}</div>
                    <div className={handles.countdown__label}>Horas</div>
                </div>
                :
                <div className={handles.countdown__box}>
                    <div className={handles.countdown__value}>{timeMinutes}</div>
                    <div className={handles.countdown__label}>Min</div>
                </div>
                {
                    (( parseInt(timeDays) == 0 && isMobile) || ( !isMobile )) && (
                        <>
                        :
                            <div className={handles.countdown__box}>
                                <div className={handles.countdown__value}>{timeSeconds}</div>
                                <div className={handles.countdown__label}>Seg</div>
                            </div>
                        </>
                    )
                }
            </div>
        ) : null
    )
}

CountDownPromos.schema = {
    title: "Cuenta regresiva Promos",
    type: "object",
    properties: {
        date_countdown: {
            title: "Cuenta regresiva",
            description: "Se debe especificar la fecha y hora de finalización",
            type: "string",
            format: "date-time",
            default: "October 4, 2025 2:00:00",
        },
        active: {
            title: "Contador activo ?",
            description: "switch contador",
            type: "boolean",
            default: true,
        }
    }
}



export default CountDownPromos 
