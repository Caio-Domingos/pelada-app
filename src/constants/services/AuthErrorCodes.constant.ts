export const ErrorCodesMessages: any = {
	'auth/claims-too-large':
		'O tamanho das reivindicações excede o tamanho máximo permitido de 1 Megabyte.',
	'auth/email-already-exists':
		'O e-mail fornecido já está em uso por outro usuário. Cada usuário deve ter um e-mail exclusivo.',
	'auth/id-token-expired': 'O token de ID fornecido está expirado.',
	'auth/id-token-revoked': 'O token de ID fornecido foi revogado.',
	'auth/insufficient-permission':
		'A credencial utilizada para autenticar o SDK Admin não possui as permissões necessárias para realizar a operação desejada.',
	'auth/internal-error':
		'O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação. O código de erro e a mensagem de erro fornecidos podem ajudar a diagnosticar o problema.',
	'auth/invalid-argument':
		'Um argumento inválido foi fornecido a um método. O código de erro fornecido identifica o argumento específico.',
	'auth/invalid-claims':
		'As reivindicações fornecidas a um token de ID são inválidas.',
	'auth/invalid-continue-uri':
		'O domínio da URL de continuação fornecido é não autorizado para o projeto atual.',
	'auth/invalid-creation-time':
		'O horário de criação deve ser uma data UTC válida.',
	'auth/invalid-credential':
		'A credencial utilizada para autenticar o SDK Admin não é válida. Isso geralmente ocorre quando é inválida, expirou ou foi revogada, ou quando o SDK Admin foi autenticado com credenciais incorretas.',
	'auth/invalid-disabled-field':
		'O campo de usuário desativado fornecido é inválido.',
	'auth/invalid-display-name': 'O nome de exibição fornecido é inválido.',
	'auth/invalid-dynamic-link-domain':
		'O domínio de link dinâmico fornecido não está autorizado para o projeto atual.',
	'auth/invalid-email': 'O e-mail fornecido não é válido.',
	'auth/invalid-email-verified': 'O e-mail fornecido não é verificado.',
	'auth/invalid-hash-algorithm':
		'O algoritmo de hash deve corresponder a uma das strings compatíveis com a função hash.',
	'auth/invalid-hash-block-size':
		'O tamanho do bloco de hash deve ser um número válido.',
	'auth/invalid-hash-derived-key-length':
		'O comprimento da chave derivada do hash deve ser um número válido.',
	'auth/invalid-hash-key': 'A chave de hash deve ter um buffer válido.',
	'auth/invalid-hash-memory-cost':
		'O custo de memória do hash deve ser um número válido.',
	'auth/invalid-hash-parallelization':
		'A paralelização do hash deve ser um número válido.',
	'auth/invalid-hash-rounds':
		'O número de rodadas de hash deve ser um número válido.',
	'auth/invalid-hash-salt-separator':
		'O separador de sal de hash deve ser um buffer válido.',
	'auth/invalid-id-token': 'O token de ID fornecido é inválido.',
	'auth/invalid-last-sign-in-time':
		'O último horário de login deve ser uma data UTC válida.',
	'auth/invalid-page-token':
		'O token de página fornecido é inválido. Ele deve ser uma string não vazia.',
	'auth/invalid-password': 'A senha fornecida é inválida.',
	'auth/invalid-password-hash': 'O hash da senha deve ser um buffer válido.',
	'auth/invalid-password-salt': 'O sal da senha deve ser um buffer válido.',
	'auth/invalid-phone-number': 'O número de telefone fornecido é inválido.',
	'auth/invalid-photo-url': 'A URL da foto de usuário fornecida é inválida.',
	'auth/invalid-provider-data':
		'Os dados do provedor fornecidos são inválidos.',
	'auth/invalid-provider-id':
		'O identificador do provedor fornecido é inválido.',
	'auth/invalid-oauth-responsetype':
		'O tipo de resposta OAuth deve ser uma string válida.',
	'auth/invalid-session-cookie-duration':
		'A duração do cookie de sessão deve ser um número válido em milissegundos, entre 5 minutos e 2 semanas.',
	'auth/invalid-uid':
		'O identificador fornecido deve ter no máximo 128 caracteres.',
	'auth/invalid-user-import':
		'O registro do usuário a ser importado não é válido.',
	'auth/maximum-user-count-exceeded':
		'O número máximo permitido de usuários a serem importados foi excedido.',
	'auth/missing-android-pkg-name':
		'Deve ser fornecido um nome de pacote Android válido para autenticação com um provedor de autenticação de Android.',
	'auth/missing-continue-uri':
		'Um URL de continuação deve ser fornecido na solicitação.',
	'auth/missing-hash-algorithm':
		'É necessário fornecer o algoritmo de hash e seus parâmetros para importar usuários com hash de senha.',
	'auth/missing-ios-bundle-id':
		'Deve ser fornecido um ID de pacote iOS válido para autenticação com um provedor de autenticação de iOS.',
	'auth/missing-uid':
		'Um identificador de usuário é necessário para a operação atual.',
	'auth/missing-oauth-client-secret':
		'O segredo do cliente OAuth deve ser configurado para autenticação com um provedor de autenticação OAuth.',
	'auth/operation-not-allowed': 'A operação não é permitida.',
	'auth/phone-number-already-exists':
		'O número de telefone fornecido já está em uso por outro usuário. Cada usuário deve ter um número de telefone exclusivo.',
	'auth/project-not-found': 'Nenhum projeto foi encontrado.',
	'auth/reserved-claims':
		'Uma ou mais reivindicações personalizadas fornecidas usam nomes reservados.',
	'auth/session-cookie-expired': 'O cookie de sessão fornecido expirou.',
	'auth/session-cookie-revoked': 'O cookie de sessão fornecido foi revogado.',
	'auth/too-many-requests': 'Muitas solicitações. Tente novamente mais tarde.',
	'auth/uid-already-exists':
		'O identificador fornecido já está em uso por outro usuário. Cada usuário deve ter um identificador exclusivo.',
	'auth/unauthorized-continue-uri':
		'O domínio da URL de continuação fornecido não está na lista de autorizados. Isso pode acontecer se o domínio da URL de continuação não estiver listado no campo de autorização da configuração do Firebase.',
	'auth/user-not-found':
		'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.',

	'auth/admin-restricted-operation':
		'Esta operação é restrita ao escopo do SDK Admin.',
	'auth/argument-error': 'Um argumento inválido foi fornecido a um método.',
	'auth/app-not-authorized':
		'O aplicativo não está autorizado a usar o SDK de autenticação.',
	'auth/app-not-installed':
		'O aplicativo solicitado não está instalado no dispositivo.',
	'auth/captcha-check-failed':
		'O token de resposta reCAPTCHA fornecido é inválido, expirou ou já foi usado.',
	'auth/code-expired': 'O código de verificação de telefone fornecido expirou.',
	'auth/cordova-not-ready': 'O aplicativo Cordova não está pronto.',
	'auth/cors-unsupported':
		'Este navegador não é suportado ou cookies e armazenamento local foram desativados.',
	'auth/credential-already-in-use':
		'Essa credencial já está associada a uma conta de usuário diferente.',
	'auth/custom-token-mismatch':
		'O token personalizado corresponde a um público diferente.',
	'auth/requires-recent-login':
		'Esta operação é sensível ao tempo e requer um login recente. Faça login novamente antes de tentar novamente esta solicitação.',
	'auth/dependent-sdk-initialized-before-auth':
		'SDK dependente inicializado antes da autenticação.',
	'auth/dynamic-link-not-activated': 'O link dinâmico não está ativado.',
	'auth/email-change-needs-verification':
		'A mudança de e-mail requer verificação.',
	'auth/email-already-in-use': 'E-mail já em uso.',
	'auth/emulator-config-failed': 'Falha na configuração do emulador.',
	'auth/expired-action-code': 'Código de ação expirado.',
	'auth/cancelled-popup-request': 'Requisição de pop-up cancelada.',
	'auth/invalid-api-key': 'Chave API inválida.',
	'auth/invalid-app-credential': 'Credencial de aplicativo inválida.',
	'auth/invalid-app-id': 'ID de aplicativo inválido.',
	'auth/invalid-user-token': 'Token de usuário inválido.',
	'auth/invalid-auth-event': 'Evento de autenticação inválido.',
	'auth/invalid-cert-hash': 'Hash de certificado inválido.',
	'auth/invalid-verification-code': 'Código de verificação inválido.',
	'auth/invalid-cordova-configuration': 'Configuração Cordova inválida.',
	'auth/invalid-custom-token': 'Token personalizado inválido.',
	'auth/invalid-emulator-scheme': 'Esquema de emulador inválido.',
	'auth/invalid-message-payload': 'Carga de mensagem inválida.',
	'auth/invalid-multi-factor-session': 'Sessão de múltiplos fatores inválida.',
	'auth/invalid-oauth-client-id': 'ID do cliente OAuth inválido.',
	'auth/invalid-oauth-provider': 'Fornecedor OAuth inválido.',
	'auth/invalid-action-code': 'Código de ação inválido.',
	'auth/unauthorized-domain': 'Domínio não autorizado.',
	'auth/wrong-password': 'Senha incorreta.',
	'auth/invalid-persistence-type': 'Tipo de persistência inválido.',
	'auth/invalid-recipient-email': 'E-mail do destinatário inválido.',
	'auth/invalid-sender': 'Remetente inválido.',
	'auth/invalid-verification-id': 'ID de verificação inválido.',
	'auth/invalid-tenant-id': 'ID de locatário inválido.',
	'auth/multi-factor-info-not-found':
		'Informações de múltiplos fatores não encontradas.',
	'auth/multi-factor-auth-required':
		'Autenticação de múltiplos fatores necessária.',
	'auth/missing-app-credential': 'Credencial de aplicativo ausente.',
	'auth/auth-domain-config-required':
		'Configuração de domínio de autenticação necessária.',
	'auth/missing-verification-code': 'Código de verificação ausente.',
	'auth/missing-iframe-start': 'Início do iframe ausente.',
	'auth/missing-or-invalid-nonce': 'Nonce ausente ou inválido.',
	'auth/missing-multi-factor-info':
		'Informações de múltiplos fatores ausentes.',
	'auth/missing-multi-factor-session': 'Sessão de múltiplos fatores ausente.',
	'auth/missing-phone-number': 'Número de telefone ausente.',
	'auth/missing-verification-id': 'ID de verificação ausente.',
	'auth/app-deleted': 'Aplicativo excluído.',
	'auth/account-exists-with-different-credential':
		'Conta existe com credencial diferente.',
	'auth/network-request-failed': 'Falha na solicitação de rede.',
	'auth/null-user': 'Usuário nulo.',
	'auth/no-auth-event': 'Nenhum evento de autenticação.',
	'auth/no-such-provider': 'Nenhum provedor encontrado.',
	'auth/operation-not-supported-in-this-environment':
		'Operação não suportada neste ambiente.',
	'auth/popup-blocked': 'Pop-up bloqueado.',
	'auth/popup-closed-by-user': 'Pop-up fechado pelo usuário.',
	'auth/provider-already-linked': 'Provedor já vinculado.',
	'auth/quota-exceeded': 'Cota excedida.',
	'auth/redirect-cancelled-by-user': 'Redirecionamento cancelado pelo usuário.',
	'auth/redirect-operation-pending': 'Operação de redirecionamento pendente.',
	'auth/rejected-credential': 'Credencial rejeitada.',
	'auth/second-factor-already-in-use': 'Segundo fator já em uso.',
	'auth/maximum-second-factor-count-exceeded':
		'Limite máximo de segundo fator excedido.',
	'auth/tenant-id-mismatch': 'Incompatibilidade de ID de locatário.',
	'auth/timeout': 'Tempo esgotado.',
	'auth/user-token-expired': 'Token de usuário expirado.',
	'auth/unsupported-first-factor': 'Primeiro fator não suportado.',
	'auth/unsupported-persistence-type': 'Tipo de persistência não suportado.',
	'auth/unsupported-tenant-operation': 'Operação de locatário não suportada.',
	'auth/unverified-email': 'E-mail não verificado.',
	'auth/user-cancelled': 'Usuário cancelou.',
	'auth/user-disabled': 'Usuário desativado.',
	'auth/user-mismatch': 'Incompatibilidade de usuário.',
	'auth/user-signed-out': 'Usuário desconectado.',
	'auth/weak-password': 'Senha fraca.',
	'auth/web-storage-unsupported': 'Armazenamento na web não suportado.',
	'auth/already-initialized': 'Já inicializado.',
	'auth/recaptcha-not-enabled': 'Recaptcha não ativado.',
	'auth/missing-recaptcha-token': 'Token recaptcha ausente.',
	'auth/invalid-recaptcha-token': 'Token recaptcha inválido.',
	'auth/invalid-recaptcha-action': 'Ação recaptcha inválida.',
	'auth/missing-client-type': 'Tipo de cliente ausente.',
	'auth/missing-recaptcha-version': 'Versão recaptcha ausente.',
	'auth/invalid-recaptcha-version': 'Versão recaptcha inválida.',
	'auth/invalid-req-type': 'Tipo de solicitação inválida.',
};
