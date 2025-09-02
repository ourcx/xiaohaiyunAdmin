"use client";
import Container from "@/components/container";
import { Flex, Progress, ProgressProps } from "antd";
import style from "./page.module.css";
import { useEffect, useRef, useState } from "react";

// 使用动态导入避免服务端渲染问题
const Chart = typeof window !== 'undefined' ?
    () => import('chart.js').then(mod => mod.Chart) :
    () => Promise.resolve(null);

export default function LinksPage() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const [chartInstance, setChartInstance] = useState<any>(null);

    useEffect(() => {
        // 确保在客户端执行
        if (typeof window === 'undefined') return;

        const initChart = async () => {
            try {
                // 动态导入 Chart.js/auto
                const ChartModule = await import('chart.js/auto');
                const ChartClass = ChartModule.Chart;

                if (chartRef.current) {
                    const ctx = chartRef.current.getContext('2d');
                    if (ctx) {
                        // 如果已有图表实例，先销毁它
                        if (chartInstance) {
                            chartInstance.destroy();
                        }

                        const newChart = new ChartClass(ctx, {
                            type: 'bar',
                            data: {
                                labels: ['January', 'February', 'March', 'April', 'May'],
                                datasets: [
                                    {
                                        label: 'Sales',
                                        data: [10, 20, 30, 40, 50],
                                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                        borderColor: 'rgba(255, 99, 132, 1)',
                                        borderWidth: 1,
                                    },
                                ],
                            },
                            options: {
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                    },
                                },
                            },
                        });

                        setChartInstance(newChart);
                    }
                }
            } catch (error) {
                console.error('Error initializing chart:', error);
            }
        };

        initChart();

        // 清理函数
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#108ee9',
        '100%': '#87d068',
    };

    return (
        <Container>
            <div className={style.link}>
                <div className={style.progress}>
                    <div className={style.progress_bar}>全局链接储存量</div>
                    <Progress percent={99.9} strokeColor={twoColors} />
                </div>
                <div className={style.enter}>
                    <div className={style.enter_title}>链接访问人数</div>
                    <canvas ref={chartRef} width="400" height="200" />
                </div>
            </div>
        </Container>
    );
}