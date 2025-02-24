import * as React from "react";
import { useInView } from "react-intersection-observer";

// @ts-expect-error
import styles from "./styles.module.css";

const placeholderUrl =
  "https://storage.yandexcloud.net/pingcity/assets/images/thumbnail_placeholder.png";

export const CocktailThumb = React.memo<{ thumbUrl?: string | null }>(
  ({ thumbUrl: _thumbUrl }) => {
    const [thumbUrl, setThumbUrl] = React.useState(placeholderUrl);

    const { ref, inView } = useInView();

    React.useEffect(() => {
      if (_thumbUrl && inView) {
        const img = new Image();
        img.src = _thumbUrl;
        img.onload = () => {
          setThumbUrl(_thumbUrl);
        };
      }
    }, [inView]);

    return (
      <div
        ref={ref}
        className={styles.thumb}
        style={{
          backgroundImage: `url('${thumbUrl}')`,
        }}
      />
    );
  }
);
