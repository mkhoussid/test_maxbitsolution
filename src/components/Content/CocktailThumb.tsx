import styled from '@emotion/styled';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

const placeholderUrl = 'https://storage.yandexcloud.net/pingcity/assets/images/thumbnail_placeholder.png';

export const CocktailThumb = React.memo<{ thumbUrl?: string | null }>(({ thumbUrl: _thumbUrl }) => {
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
        <CocktailThumbContainer
            ref={ref}
            style={{
                backgroundImage: `url('${thumbUrl}')`,
            }}
        />
    );
});

const CocktailThumbContainer = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    margin: 0.25rem 0.5rem 0rem 1rem;
`;
