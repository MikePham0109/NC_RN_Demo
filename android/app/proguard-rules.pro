# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
# Smartech Base SDK
-dontwarn com.netcore.android.**
-keep class com.netcore.android.**{*;}
-keep class * implements com.netcore.android.**.* {*;}
-keep class * extends com.netcore.android.**.* {*;}
# Smartech Push SDK
-dontwarn com.netcore.android.smartechpush.**
-keep class com.netcore.android.smartechpush.**{*;}
-keep class * implements com.netcore.android.smartechpush.**.* {*;}
-keep class * extends com.netcore.android.smartechpush.**.* {*;}
# PX
-keep class com.facebook.react.views.** { *; }
-keep class com.netcore.views.** { *; }