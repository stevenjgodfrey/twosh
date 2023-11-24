// dynamic-image.component.ts

import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-image',
  templateUrl: './dynamic-image.component.html',
  styleUrls: ['./dynamic-image.component.css'],
})
export class DynamicImageComponent {
  @Input() squareCount: number = 0;

  constructor(private sanitizer: DomSanitizer) {}

  generateImageUrl(count: number): SafeUrl {
    const squareSize = 10; // Adjust the size of each square as needed
    const numberOfSquares = 5; // Adjust the numberOfSquares between squares as needed
    const totalWidth = numberOfSquares * (squareSize + numberOfSquares);

    const svg = `
      <svg width="${totalWidth}" height="${squareSize}" xmlns="http://www.w3.org/2000/svg">
        ${Array.from({ length: 5 }, (_, index) =>
          this.generateSquare(index * (squareSize + numberOfSquares), squareSize, index < count)
        ).join('')}
      </svg>
    `;

    // Convert the SVG to a data URI and sanitize the URL
    const imageUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  private generateSquare(x: number, size: number, isFilled: boolean): string {
    const outerSquare = `<rect x="${x}" y="0" width="${size}" height="${size}" fill="grey" stroke="black" stroke-width="0.1" />`;

    const innerSquare =
      !isFilled ?
      `<rect x="${x + 3}" y="3" width="${size - 6}" height="${size - 6}" fill="white" />` :
      '';

    return outerSquare + innerSquare;
  }
}
