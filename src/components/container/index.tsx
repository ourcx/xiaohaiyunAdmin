import Head from "next/head";
import base from "@/app/page.module.css"
import React, { ReactNode } from "react";
type ContainerProps = {
    children: ReactNode;
    title?: string;
};

export default function Container({ children, title = "小海云后台" }: ContainerProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="This is the login page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={base.page}>
                    {children}
            </div>
        </>
    );
}
