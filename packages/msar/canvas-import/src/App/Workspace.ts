import { Canvas } from '@oauth2-cli/canvas';
import { Log } from '@qui-cli/log';

const SIS_ID = '@msar/canvas-import-workspace';

let term_id: number | string | undefined = undefined;
let account_id: number | string | undefined = undefined;

export async function getTermId(): Promise<
  Canvas.EnrollmentTerms.EnrollmentTerm['id']
> {
  if (!term_id) {
    const terms = (
      await Canvas.v1.Accounts.Terms.list({
        pathParams: { account_id: 1 },
        // @ts-expect-error 2353 per_page does actually work here
        searchParams: { per_page: 200 }
      })
    ).enrollment_terms;
    term_id = terms.reduce(
      (
        id: number | string | undefined,
        term: Canvas.EnrollmentTerms.EnrollmentTerm
      ) => {
        if (term.sis_term_id === SIS_ID) {
          return term.id;
        }
        return id;
      },
      undefined
    );
  }
  if (!term_id) {
    const term = await Canvas.v1.Accounts.Terms.create({
      pathParams: { account_id: 1 },
      params: {
        'enrollment_term[name]': 'Import Workspace',
        'enrollment_term[sis_term_id]': SIS_ID
      }
    });
    term_id = term.id;
  }

  return term_id;
}

export async function getAccountId(): Promise<Canvas.Accounts.Account['id']> {
  if (!account_id) {
    const accounts = await Canvas.v1.Accounts.SubAccounts.get({
      pathParams: { account_id: 1 },
      searchParams: { per_page: 200 }
    });
    Log.debug({ accounts });
    account_id = accounts.reduce((id: number | string | undefined, account) => {
      if (account.sis_account_id === SIS_ID) {
        return account.id;
      }
      return id;
    }, undefined);
  }
  if (!account_id) {
    const account = await Canvas.v1.Accounts.SubAccounts.create({
      pathParams: { account_id: 1 },
      params: {
        'account[name]': 'Import Workspace',
        'account[sis_account_id]': SIS_ID
      }
    });
    account_id = account.id;
  }
  return account_id;
}
