'use client';

import dynamic from 'next/dynamic';

const GlobalAppointmentPopup = dynamic(
    () => import('./GlobalAppointmentPopup'),
    { ssr: false }
);

export default function GlobalAppointmentPopupLoader() {
    return <GlobalAppointmentPopup />;
}
