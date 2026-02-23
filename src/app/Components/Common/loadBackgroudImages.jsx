import { getAssetPathClient } from '../../utils/assetPath';

export default function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");

    if (backgroudImages.length > 0) {
      backgroudImages.forEach(element => {
        let image = element.dataset.background;
        const processedImage = getAssetPathClient(image);
        element.style.backgroundImage = `url('${processedImage}')`;
      })
    }
  }