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
        <div style={{ width: '25%' }}>
          <Skeleton sx={{ margin: 0 }} variant="rectangular" height={153.98} />
        </div>
        <div style={{ width: '75%' }}>
          <Skeleton
            sx={{ marginTop: 2, marginRight: '10%', marginLeft: '10%' }}
            variant="rectangular"
            height={20}
          />
          <Skeleton
            sx={{ marginTop: 2, marginRight: '10%', marginLeft: '10%' }}
            variant="rectangular"
            height={15}
          />
          <Skeleton
            sx={{ marginTop: 2, marginRight: '10%', marginLeft: '10%' }}
            variant="rectangular"
            height={10}
          />
          <Skeleton
            sx={{ marginTop: 2, marginRight: '10%', marginLeft: '10%' }}
            variant="rectangular"
            height={10}
          />
        </div>
      </div>
    </Card>
  );
}
