export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full">
			<header className="mx-auto w-full max-w-screen-lg px-3 py-3 lg:px-0">
				<section>
					<h2 className="text-3xl font-bold">Settings</h2>
					<p>Manage your account settings and set e-mail preferences.</p>
				</section>
			</header>
			{children}
		</section>
	);
}
