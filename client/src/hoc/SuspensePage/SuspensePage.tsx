import React, { Suspense } from 'react';

import type { SuspensePageProps } from '@/hoc/SuspensePage/types';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner/LoadingSpinner';

export const SuspensePage: React.FC<SuspensePageProps> = ({ children, hasLoading = true }) => (
  <Suspense fallback={hasLoading ? <LoadingSpinner /> : null}>{children}</Suspense>
);
