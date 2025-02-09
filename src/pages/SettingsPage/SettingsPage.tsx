import { useCookies } from 'react-cookie';
import { PageContainer } from '../../components/styled';
import { getVisibleText } from '../../lib/text/getVisibleText';
import LoadingIndicator from '../../components/Loading';
import { ErrorHandlerType } from '../../components/errors/helpers/getErrorMessage';
import { getPatreonLink } from './getPatreonLink';
import { LinkEmail } from './LinkEmail';
import { SettingsPageContainer } from './styled';
import { useUserLocals } from '../../lib/hooks/useUserLocals';

const portalLinks = {
  production: 'https://billing.stripe.com/p/login/aEUaHp8ma4VPfPW9AA',
  development: 'https://billing.stripe.com/p/login/test_00g6pu0q60JYbMQ3cc',
};

interface SettingsPageProps {
  setErrorMessage: ErrorHandlerType;
}

export default function SettingsPage({
  setErrorMessage,
}: Readonly<SettingsPageProps>) {
  const customerPortal =
    process.env.NODE_ENV === 'development'
      ? portalLinks.development
      : portalLinks.production;

  const [, , removeCookie] = useCookies(['token']);

  const { isLoading, isError, data, error } = useUserLocals();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    setErrorMessage(error);
  }

  if (!data) {
    removeCookie('token');
    window.location.href = '/login';
  }

  const locals = data?.locals;
  const user = data?.user;

  return (
    <PageContainer>
      <SettingsPageContainer>
        <div className="box">
          <h1>Settings</h1>
          {user && (
            <p data-hj-suppress>
              You are logged in as {user?.name} (email: {user?.email})
            </p>
          )}
          {locals?.patreon && <p>You are a Patreon member</p>}
          {locals?.subscriber && <p>You are a Subscriber</p>}
          <p>
            For more information on usage, see the{' '}
            <a
              className="link"
              href={getVisibleText('navigation.help.url')}
              target="_blank"
              rel="noreferrer"
            >
              {getVisibleText('navigation.help')}.
            </a>
          </p>
          <p className="control">
            {locals?.subscriber && (
              <a className="button is-large is-link" href={customerPortal}>
                Manage subscription
              </a>
            )}
            {locals?.patreon && (
              <a className="button is-large is-link" href={getPatreonLink()}>
                Manage membership
              </a>
            )}
          </p>
          {locals?.subscriber && (
            <p>
              <LinkEmail
                linked_email={data?.linked_email}
                setErrorMessage={setErrorMessage}
              />
            </p>
          )}
        </div>
        <p className="control">
          <a className="link is-small is-danger button" href="/delete-account">
            {getVisibleText('navigation.deleteAccount')}
          </a>
        </p>
      </SettingsPageContainer>
    </PageContainer>
  );
}
