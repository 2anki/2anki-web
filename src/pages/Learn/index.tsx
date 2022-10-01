import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ErrorHandlerType } from '../../components/errors/helpers/types';
import { PageContainer } from '../../components/styled';
import LoadingPage from '../Loading';
import { useRenderBlock } from './helpers/useRenderBlock';
import { useLearnData } from './helpers/useLearnData';
import PageControls from './components/PageControls';

interface Props {
  setError: ErrorHandlerType;
}

function LearnPage({ setError }: Props) {
  const [parentId, setParentId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  const { children, page, error } = useLearnData(parentId);
  const location = useLocation();

  const block = children ? children[index] : null;
  const { loading, backSide, frontSide } = useRenderBlock(block?.id);
  // Load parent page based on id
  useEffect(() => {
    setParentId(location.pathname.split('/').at(-1) || null);
  }, []);

  if (error) {
    setError(error.toString());
  }
  if (!parentId || !children) {
    return <LoadingPage />;
  }

  return (
    <PageContainer>
      {page && (
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <h1 className="title">
                <a href={page.url}>{page.title}</a>
              </h1>
            </li>
          </ul>
        </nav>
      )}
      <div className="container">
        {block && (
          <>
            {frontSide && (
              // eslint-disable-next-line react/no-danger
              <div dangerouslySetInnerHTML={{ __html: frontSide }} />
            )}
            {backSide && (
              // eslint-disable-next-line react/no-danger
              <div dangerouslySetInnerHTML={{ __html: backSide }} />
            )}
            <hr />
          </>
        )}
        <PageControls
          loading={loading}
          index={index}
          setIndex={setIndex}
          total={children.length}
        />
      </div>
    </PageContainer>
  );
}

export default LearnPage;
