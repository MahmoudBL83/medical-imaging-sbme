import argparse
from pathlib import Path


def extract_with_pdfplumber(pdf_path: Path, out_dir: Path, max_pages: int) -> int:
    import pdfplumber

    with pdfplumber.open(pdf_path) as pdf:
        total = min(len(pdf.pages), max_pages)
        for i in range(total):
            text = pdf.pages[i].extract_text() or ""
            (out_dir / f"page-{i + 1:03}.txt").write_text(text, encoding="utf-8")
        return total


def extract_with_pypdf(pdf_path: Path, out_dir: Path, max_pages: int) -> int:
    from pypdf import PdfReader

    reader = PdfReader(str(pdf_path))
    total = min(len(reader.pages), max_pages)
    for i in range(total):
        text = reader.pages[i].extract_text() or ""
        (out_dir / f"page-{i + 1:03}.txt").write_text(text, encoding="utf-8")
    return total


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract PDF text into page-by-page .txt files."
    )
    parser.add_argument(
        "--pdf",
        required=True,
        help="Path to the PDF file to extract.",
    )
    parser.add_argument(
        "--out",
        required=True,
        help="Output folder for page-###.txt files.",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=350,
        help="Maximum number of pages to extract (default: 350).",
    )
    parser.add_argument(
        "--engine",
        choices=["auto", "pdfplumber", "pypdf"],
        default="auto",
        help="Extraction engine (default: auto).",
    )
    args = parser.parse_args()

    pdf_path = Path(args.pdf)
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.engine == "pdfplumber":
        total = extract_with_pdfplumber(pdf_path, out_dir, args.max_pages)
    elif args.engine == "pypdf":
        total = extract_with_pypdf(pdf_path, out_dir, args.max_pages)
    else:
        try:
            total = extract_with_pdfplumber(pdf_path, out_dir, args.max_pages)
        except Exception:
            total = extract_with_pypdf(pdf_path, out_dir, args.max_pages)

    print(f"Extracted {total} page files to {out_dir}")


if __name__ == "__main__":
    main()
