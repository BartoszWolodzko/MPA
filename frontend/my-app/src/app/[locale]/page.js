import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('MainPage');
	return (
		<div>
			<div>{t('Title')}</div>
			<div>{t('Description')}</div>
		</div>
	);
}
