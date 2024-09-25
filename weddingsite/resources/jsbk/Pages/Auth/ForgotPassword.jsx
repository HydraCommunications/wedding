import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg border-rosePink border-2">
                <h2 className="text-3xl font-bold font-pus text-josefBlue text-center mb-6">Forgot your Password?</h2>

                <div className="mb-4 text-sm text-gray-600">
                    No problem. Just let us know your email address and we will email you a password
                    reset link that will allow you to choose a new one.
                </div>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rosePink focus:border-rosePink sm:text-sm"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4 bg-rosePink hover:bg-pink-600 focus:ring-rosePink" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}