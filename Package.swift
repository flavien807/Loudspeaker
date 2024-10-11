// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Loudspeaker",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "Loudspeaker",
            targets: ["LoudspeakerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "LoudspeakerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/LoudspeakerPlugin"),
        .testTarget(
            name: "LoudspeakerPluginTests",
            dependencies: ["LoudspeakerPlugin"],
            path: "ios/Tests/LoudspeakerPluginTests")
    ]
)