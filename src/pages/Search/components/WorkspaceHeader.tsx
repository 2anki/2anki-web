import { NotionData } from '../helpers/useNotionData';

interface WorkspaceHeaderProps {
  isPatron: boolean;
  randomId: string | null;
  notionData: NotionData;
}

export default function WorkSpaceHeader(props: WorkspaceHeaderProps) {
  const { notionData, randomId, isPatron } = props;
  const { workSpace, connectionLink } = notionData;

  return (
    <div className="container content mt-2 mb-0 is-flex is-justify-content-center">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="subtitle is-5">
              <span className="tag is-info">workspace</span>
              <header>
                <h1 data-hj-suppress>{workSpace}</h1>
              </header>
            </div>
          </div>
          <div className="level-item">
            <div className="field is-grouped">
              <p className="control">
                <a href={connectionLink} className="button is-small">
                  Switch
                </a>
              </p>
              {randomId && isPatron && (
                <p className="control">
                  <a href={`/learn/${randomId}`} className="button is-small">
                    Learn
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
