import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Download, Smartphone, Share2, Plus, Bell } from 'lucide-react';
import type { BeforeInstallPromptEvent } from '@/types/notifications';
import notificationManager from '@/services/simpleNotificationManager';

const InstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isIOS, setIsIOS] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        setIsIOS(isIOSDevice);
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setShowModal(true);
        };
        if (isIOSDevice && !window.matchMedia('(display-mode: standalone)').matches) {
            setShowModal(true);
        }
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        notificationManager.initialize();
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                setTimeout(() => {
                    notificationManager.sendWelcomeNotification();
                }, 2000);
            }
            setDeferredPrompt(null);
            setShowModal(false);
        }
    };

    const handleEnableNotifications = async () => {
        try {
            const granted = await notificationManager.requestPermission();
            if (granted) {
                if (notificationManager.isReady()) {
                    await notificationManager.sendWelcomeNotification();
                } else {
                    console.log('Notification system not ready yet');
                }
            }
        } catch (error) {
            console.error('Error enabling notifications:', error);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative bg-linear-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#008dfe]/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#faa41a]/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>

                    {/* Header with linear */}
                    <div className="h-2 bg-linear-to-r from-[#008dfe] to-[#faa41a]"></div>

                    <DialogHeader className="p-6 pb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-12 h-12 bg-linear-to-br from-[#008dfe] to-[#faa41a] rounded-2xl flex items-center justify-center shadow-lg"
                            >
                                <Smartphone className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {isIOS ? 'Install App' : 'Add to Home Screen'}
                                </DialogTitle>
                                <p className="text-sm text-[#008dfe] font-semibold">
                                    Better experience, faster access
                                </p>
                            </div>
                        </div>

                        <DialogDescription className="text-gray-600 dark:text-gray-300 text-base">
                            {isIOS ? (
                                <div className="space-y-4">
                                    <p>Get the best experience by adding our app to your home screen:</p>
                                    <div className="space-y-3">
                                        <motion.div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="w-8 h-8 bg-[#008dfe]/10 rounded-lg flex items-center justify-center">
                                                <Share2 className="w-4 h-4 text-[#008dfe]" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">Tap Share</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">In Safari's bottom menu</p>
                                            </div>
                                        </motion.div>

                                        <motion.div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                            <div className="w-8 h-8 bg-[#faa41a]/10 rounded-lg flex items-center justify-center">
                                                <Plus className="w-4 h-4 text-[#faa41a]" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">Add to Home Screen</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Scroll and select the option</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Notification Enable Section */}
                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Bell className="w-5 h-5 text-blue-600" />
                                            <p className="font-semibold text-blue-900 dark:text-blue-100">
                                                Enable Notifications
                                            </p>
                                        </div>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Get updates about events, workshops, and important announcements
                                        </p>
                                        <Button
                                            onClick={handleEnableNotifications}
                                            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white"
                                            size="sm"
                                        >
                                            Enable Notifications
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Install our app for quick access and better performance
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#008dfe] rounded-full"></div>
                                            <span className="text-sm">Fast loading times</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#faa41a] rounded-full"></div>
                                            <span className="text-sm">Offline functionality</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-linear-to-r from-[#008dfe] to-[#faa41a] rounded-full"></div>
                                            <span className="text-sm">Push notifications</span>
                                        </div>
                                    </div>

                                    {/* Notification Enable Section */}
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Bell className="w-5 h-5 text-green-600" />
                                            <p className="font-semibold text-green-900 dark:text-green-100">
                                                Stay Updated
                                            </p>
                                        </div>
                                        <p className="text-sm text-green-700 dark:text-green-300">
                                            Receive notifications for events, birthdays, and important updates
                                        </p>
                                        <Button
                                            onClick={handleEnableNotifications}
                                            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
                                            size="sm"
                                        >
                                            Enable Notifications
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="p-6 pt-4 flex flex-col sm:flex-row gap-3">
                        {isIOS ? (
                            <Button
                                onClick={handleClose}
                                className="w-full bg-linear-to-r from-[#008dfe] to-[#faa41a] hover:from-[#0077cc] hover:to-[#e69500] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Got it!
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="outline"
                                    onClick={handleClose}
                                    className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                >
                                    Maybe Later
                                </Button>
                                <Button
                                    onClick={handleInstallClick}
                                    className="w-full sm:w-auto bg-linear-to-r from-[#008dfe] to-[#faa41a] hover:from-[#0077cc] hover:to-[#e69500] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Install Now
                                </Button>
                            </>
                        )}
                    </DialogFooter>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
};

export default InstallPrompt;