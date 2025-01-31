import { NextIntlClientProvider, useTranslations } from 'next-intl';

import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';

export default async function RootLayout({ children, params }) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<header>{messages['Layout'].Header}</header>
					<main>{children}</main>
					<footer>{messages['Layout'].Footer}</footer>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
