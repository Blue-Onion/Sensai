import puppeteer from "puppeteer";

export async function POST(req) {
    try {
        const { html } = await req.json(); // Get HTML content from request

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        await page.setContent(html, { waitUntil: "domcontentloaded" });

        const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

        await browser.close();

        return new Response(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=output.pdf",
            },
        });
    } catch (error) {
        console.error("Error generating PDF:", error);
        return new Response(JSON.stringify({ error: "Failed to generate PDF" }), { status: 500 });
    }
}
