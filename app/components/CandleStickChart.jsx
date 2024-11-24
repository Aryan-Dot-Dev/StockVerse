import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

const CandlestickChart = ({ data, stockName }) => {
    const chartRef = useRef(null);
    const tooltipRef = useRef(null);
    const [chartWidth, setChartWidth] = useState(700); // Default width
    const [chartHeight, setChartHeight] = useState(275); // Default height

    // Ensure code runs only in the browser (client-side)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setChartWidth(window.innerWidth * 0.52); // Update width to 90% of window width
                setChartHeight(window.innerWidth < 780 ? 250 : 325); // Adjust height based on screen size (optional)
            };

            // Set initial dimensions on mount
            handleResize();

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (data && chartRef.current) {
            d3.select(chartRef.current).selectAll("*").remove();

            const parseDate = d3.timeParse("%Y-%m-%d");
            const formattedData = data.map(d => ({
                ...d,
                date: parseDate(d.date),
            }));

            const margin = { top: 20, right: 20, bottom: 30, left: 50 };

            // Create scales
            const xScale = d3.scaleBand()
                .domain(formattedData.map(d => d.date))
                .range([0, chartWidth - margin.left - margin.right])
                .padding(0.3); // Reduce the padding for better spacing

            const yScale = d3.scaleLinear()
                .domain([
                    d3.min(formattedData, d => d.low),
                    d3.max(formattedData, d => d.high),
                ])
                .nice()
                .range([chartHeight - margin.top - margin.bottom, 0]);

            const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %d"));
            const yAxis = d3.axisLeft(yScale);

            const svg = d3.select(chartRef.current)
                .attr("width", chartWidth)
                .attr("height", chartHeight)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            svg.append("g")
                .attr("class", "x-axis")
                .attr("transform", `translate(0,${chartHeight - margin.top - margin.bottom})`)
                .call(xAxis);

            svg.append("g")
                .attr("class", "y-axis")
                .call(yAxis);

            const tooltip = d3.select(tooltipRef.current)
                .style("visibility", "hidden");

            svg.selectAll(".wick")
                .data(formattedData)
                .enter()
                .append("line")
                .attr("class", "wick")
                .attr("x1", d => xScale(d.date) + xScale.bandwidth() / 2)
                .attr("x2", d => xScale(d.date) + xScale.bandwidth() / 2)
                .attr("y1", d => yScale(d.high))
                .attr("y2", d => yScale(d.low))
                .style("stroke", "#22C55E")
                .style("stroke-width", 1);

            svg.selectAll(".candle")
                .data(formattedData)
                .enter()
                .append("rect")
                .attr("class", d => (d.close > d.open ? "candle up" : "candle down"))
                .attr("x", d => xScale(d.date) + xScale.bandwidth() / 2 - xScale.bandwidth() / 20)
                .attr("y", d => yScale(Math.max(d.open, d.close)))
                .attr("width", xScale.bandwidth() / 10) // Ensure the candle width fits within the band
                .attr("height", d => Math.abs(yScale(d.open) - yScale(d.close)))
                .style("fill", d => (d.close > d.open ? "#22C55E" : "#FF0000"))
                .attr("rx", 10)
                .attr("ry", 10)
                .on("mouseover", (event, d) => {
                    tooltip.style("visibility", "visible").html(`
                        <strong>Date:</strong> ${d3.timeFormat("%b %d, %Y")(d.date)}<br/>
                        <strong>Open:</strong> ${d.open}<br/>
                        <strong>Close:</strong> ${d.close}<br/>
                        <strong>Low:</strong> ${d.low}<br/>
                        <strong>High:</strong> ${d.high}
                    `);
                })
                .on("mousemove", (event) => {
                    tooltip.style("top", `${event.pageY - 100}px`)
                        .style("left", `${event.pageX - 150}px`);
                })
                .on("mouseout", () => {
                    tooltip.style("visibility", "hidden");
                });
        }
    }, [data, chartWidth, chartHeight]);

    return (
        <div className="relative bg-[#151515] text-white rounded-lg shadow-lg max-w-4xl mx-auto">
            {/* Stock Name Section */}
            <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#22C55E]">{stockName}</h3>
                <p className="text-sm text-gray-400 mt-2">
                    Track the latest market trends and make informed decisions based on real-time data.
                </p>
            </div>

            {/* Chart Section */}
            <div>
                <svg ref={chartRef} className="w-full h-80 rounded-lg border border-[#22C55E]"></svg>
            </div>

            {/* Tooltip Section */}
            <div
                ref={tooltipRef}
                className="absolute z-10 p-3 text-sm bg-[#333] text-[#00FF00] rounded-lg shadow-lg"
                style={{
                    pointerEvents: "none",
                    visibility: "hidden", // Tooltip hidden by default
                    transform: "translate(-50%, -100%)",
                }}
            >
                {/* Tooltip content will be dynamically updated on hover */}
            </div>
        </div>
    );
};

export default CandlestickChart;
