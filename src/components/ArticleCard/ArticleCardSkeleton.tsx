import './ArticleCardSkeleton.css';
import { Card, Skeleton } from '@mui/material';

export function ArticleCardSkeleton() {
  return (
    <Card data-testid="ArticleCardSkeleton" className="ArticleCardSkeleton">
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Skeleton
          sx={{ margin: 0 }}
          variant="rectangular"
          width={151}
          height={153.98}
        />
        <div style={{ width: '100%' }}>
          <Skeleton
            sx={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 2 }}
            variant="rectangular"
            width={900}
            height={20}
          />
          <Skeleton
            sx={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 2 }}
            variant="rectangular"
            width={900}
            height={15}
          />
          <Skeleton
            sx={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 2 }}
            variant="rectangular"
            width={900}
            height={10}
          />
          <Skeleton
            sx={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 2 }}
            variant="rectangular"
            width={900}
            height={10}
          />
        </div>
      </div>
    </Card>
  );
}
