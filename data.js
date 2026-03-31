const questions = [
    {
        "id": 1,
        "type": "True False",
        "question": "All Azure Active Directory (Azure AD) licence editions include the same features.",
        "question_vi": "Tất cả các phiên bản giấy phép Azure Active Directory (Azure AD) đều bao gồm các tính năng giống nhau.",
        "answer": false,
        "explanation_vi": "Không - https://azure.microsoft.com/en-us/pricing/details/active-directory/: Azure Active Directory có bốn phiên bản—Miễn phí, ứng dụng Office 365, Premium P1 và Premium P2."
    },
    {
        "id": 2,
        "type": "True False",
        "question": "You can manage an Azure Active Directory (Azure AD) tenant by using the Azure portal.",
        "question_vi": "Bạn có thể quản lý một tenant Azure Active Directory (Azure AD) bằng cách sử dụng Azure portal.",
        "answer": true,
        "explanation_vi": "Có - https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-access-create-new-tenant Bạn có thể thực hiện tất cả các tác vụ quản trị của mình bằng cổng Azure Active Directory (Azure AD), bao gồm cả việc tạo một tenant mới cho tổ chức của bạn."
    },
    {
        "id": 3,
        "type": "True False",
        "question": "You must deploy Azure virtual machines to host an Azure Active Directory (Azure AD) tenant.",
        "question_vi": "Bạn phải triển khai Azure virtual machines để host một tenant Azure Active Directory (Azure AD).",
        "answer": false,
        "explanation_vi": "Không - Azure Active Directory (Azure AD) là một dịch vụ dựa trên đám mây, vì vậy bạn không cần phải triển khai Azure virtual machines để host một tenant Azure AD."
    },
    {
        "id": 4,
        "type": "Choose the correct answer",
        "question": "??? provide best practices from Microsoft employees, partners, and customers, including tools and guidance to assist in an Azure deployment.",
        "question_vi": "??? cung cấp các thực hành tốt nhất từ nhân viên, đối tác và khách hàng của Microsoft, bao gồm các công cụ và hướng dẫn để hỗ trợ triển khai Azure.",
        "options": [
            "Azure Blueprints",
            "Azure Policy",
            "The Microsoft Cloud Adoption Framework for Azure",
            "A resource lock"
        ],
        "answer": "The Microsoft Cloud Adoption Framework for Azure",
        "explanation_vi": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/"
    },
    {
        "id": 5,
        "type": "Choose the correct answer",
        "question": "??? is used to indentify, hold, and export electronics information that might be used in an investigation.",
        "question_vi": "??? được sử dụng để xác định, giữ và xuất thông tin điện tử có thể được sử dụng trong một cuộc điều tra.",
        "options": [
            "Customer Lockbox",
            "Data Loss Prevention (DLP)",
            "eDiscovery",
            "A resource lock"
        ],
        "answer": "eDiscovery",
        "explanation_vi": "https://docs.microsoft.com/en-us/microsoft-365/compliance/ediscovery?view=o365-worldwide"
    },
    {
        "id": 6,
        "type": "Choose the correct answer",
        "question": "You can manage Microsoft Intune by using the ???",
        "question_vi": "Bạn có thể quản lý Microsoft Intune bằng cách sử dụng ???",
        "options": [
            "Azure Active Directory admin center",
            "Microsoft 365 compliance center",
            "Microsoft 365 Defender portal",
            "Microsoft Endpoint Manager admin center"
        ],
        "answer": "Microsoft Endpoint Manager admin center",
        "explanation_vi": "Microsoft Intune, một phần của Microsoft Endpoint Manager, cung cấp cơ sở hạ tầng đám mây, quản lý thiết bị di động dựa trên đám mây (MDM), quản lý ứng dụng di động dựa trên đám mây (MAM) và quản lý máy tính cá nhân dựa trên đám mây cho tổ chức của bạn."
    },
    {
        "id": 7,
        "type": "Choose the correct answer",
        "question": "Federation is used to establish ??? between organizations.",
        "question_vi": "Federation được sử dụng để thiết lập ??? giữa các tổ chức.",
        "options": [
            "multi-factor authentication (MFA)",
            "a trust relationship",
            "user account synchronization",
            "a VPN connection"
        ],
        "answer": "a trust relationship",
        "explanation_vi": "Federation là tập hợp các domain đã thiết lập được sự tin tưởng lẫn nhau. Mức độ tin tưởng có thể khác nhau, nhưng thường bao gồm xác thực và hầu như luôn bao gồm cả ủy quyền."
    },
    {
        "id": 8,
        "type": "True False",
        "question": "Applying system updates increases an organization's secure store in Microsoft Defender for Cloud",
        "question_vi": "Áp dụng các bản cập nhật hệ thống sẽ tăng cường bảo mật cho tổ chức trong Microsoft Defender for Cloud",
        "answer": true,
        "explanation_vi": "Việc cập nhật hệ thống giúp giảm thiểu các lỗ hổng bảo mật và cung cấp môi trường ổn định hơn cho người dùng cuối. Việc không cập nhật sẽ dẫn đến các lỗ hổng chưa được vá và tạo ra môi trường dễ bị tấn công."
    },
    {
        "id": 9,
        "type": "True False",
        "question": "The secure score in Microsoft Defender for Cloud can evaluate resources across multiple Azure subscritions",
        "question_vi": "Điểm an toàn trong Microsoft Defender for Cloud có thể đánh giá tài nguyên trên nhiều đăng ký Azure.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 10,
        "type": "True False",
        "question": "Enabling multi-factor authentication (MFA) increases an organization's secure store in Microsoft Defender for Cloud",
        "question_vi": "Việc bật xác thực đa yếu tố (MFA) sẽ tăng cường bảo mật cho tổ chức trong Microsoft Defender for Cloud",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 11,
        "type": "Choose the correct answer",
        "question": "Which score measures an organization's progress in completing actions that help reduce risks associated to data protection and regulatory standards?",
        "question_vi": "Điểm nào đo lường tiến độ của tổ chức trong việc hoàn thành các hành động giúp giảm thiểu rủi ro liên quan đến bảo vệ dữ liệu và các tiêu chuẩn quy định?",
        "options": [
            "Compliance score",
            "Microsoft Secure score",
            "Productivity score",
            "Secure score in Azure Security Center"
        ],
        "answer": "Compliance score",
        "explanation_vi": "regulatory => compliance. Compliance score (Điểm tuân thủ) chính là thước đo được thiết kế chuyên biệt để đánh giá xem tổ chức của bạn đang làm tốt đến đâu trong việc tuân thủ các bộ luật, quy định pháp lý (như GDPR, HIPAA, ISO 27001...) và các chính sách bảo vệ thông tin nhạy cảm."
    },
    {
        "id": 12,
        "type": "Choose the correct answer",
        "question": "What do you use to provide real-time integration between Azure Sentinel and another security source?",
        "question_vi": "Bạn sử dụng gì để cung cấp tích hợp thời gian thực giữa Azure Sentinel và một nguồn bảo mật khác?",
        "options": [
            "Azure AD Connect",
            "a Log Analytics workspace",
            "Azure Information Protection",
            "a connector"
        ],
        "answer": "a connector",
        "explanation_vi": "Để tích hợp Azure Sentinel, trước tiên bạn cần kết nối với các nguồn bảo mật của mình. Azure Sentinel đi kèm với một số trình kết nối cho các giải pháp của Microsoft, bao gồm các giải pháp Microsoft 365 Defender và các nguồn Microsoft 365, bao gồm Office 365, Azure AD, Microsoft Defender for Identity và Microsoft Cloud App Security, v.v."
    },
    {
        "id": 13,
        "type": "Choose the correct answer",
        "question": "Which Microsoft portal provides information about how Microsoft cloud services comply with regulatory standard, such as International Organization for Standardization (ISO)?",
        "question_vi": "Cổng thông tin Microsoft nào cung cấp thông tin về việc các dịch vụ đám mây của Microsoft tuân thủ các tiêu chuẩn quy định, chẳng hạn như Tổ chức Tiêu chuẩn hóa Quốc tế (ISO)?",
        "options": [
            "the Microsoft Endpoint Manager admin center",
            "Azure Cost Management + Billing",
            "Microsoft Service Trust Portal",
            "the Azure Active Directory admin center"
        ],
        "answer": "Microsoft Service Trust Portal",
        "explanation_vi": "Microsoft Service Trust Portal là cổng thông tin cung cấp thông tin về việc các dịch vụ đám mây của Microsoft tuân thủ các tiêu chuẩn quy định, chẳng hạn như Tổ chức Tiêu chuẩn hóa Quốc tế (ISO)."
    },
    {
        "id": 14,
        "type": "Choose the correct answer",
        "question": "In the shared responsibility model for an Azure deployment, what is Microsoft solely responsible for managing?",
        "question_vi": "Trong mô hình trách nhiệm chia sẻ cho việc triển khai Azure, Microsoft chịu trách nhiệm duy nhất cho việc quản lý gì?",
        "options": [
            "the management of mobile devices",
            "the permissions for the user data stored in Azure",
            "the creation and management of user accounts",
            "the management of the physical hardware"
        ],
        "answer": "the management of the physical hardware",
        "explanation_vi": ""
    },
    {
        "id": 15,
        "type": "True False",
        "question": "Verify explicitly is one of the guiding principles of Zero Trust",
        "question_vi": "Xác minh rõ ràng là một trong những nguyên tắc hướng dẫn của Zero Trust",
        "answer": true,
        "explanation_vi": "Nguyên tắc 'Verify Explicitly' (Xác minh rõ ràng) là một trong những nguyên tắc cốt lõi của Zero Trust. Nó nhấn mạnh rằng hệ thống phải được thiết kế với giả định rằng kẻ tấn công đã xâm nhập vào mạng, do đó cần phải liên tục xác minh danh tính và quyền truy cập của mọi yêu cầu."
    },
    {
        "id": 16,
        "type": "True False",
        "question": "Assume breach is one of the guiding principles of Zero Trust",
        "question_vi": "Giả định có sự xâm phạm là một trong những nguyên tắc hướng dẫn của Zero Trust",
        "answer": true,
        "explanation_vi": "Nguyên tắc 'Assume Breach' (Giả định có sự xâm phạm) là một trong những nguyên tắc cốt lõi của Zero Trust. Nó nhấn mạnh rằng hệ thống phải được thiết kế với giả định rằng kẻ tấn công đã xâm nhập vào mạng, do đó cần phải liên tục xác minh danh tính và quyền truy cập của mọi yêu cầu."
    },
    {
        "id": 17,
        "type": "True False",
        "question": "The Zero Trust security model assumes that a firewall secures the internal network from external threats",
        "question_vi": "Mô hình bảo mật Zero Trust giả định rằng tường lửa bảo vệ mạng nội bộ khỏi các mối đe dọa bên ngoài",
        "answer": false,
        "explanation_vi": "Nguyên tắc cốt lõi của Zero Trust là 'Không tin tưởng bất cứ ai, luôn xác minh'. Nó không giả định rằng tường lửa có thể bảo vệ mạng nội bộ khỏi các mối đe dọa bên ngoài. Thay vào đó, nó yêu cầu xác minh danh tính và quyền truy cập của mọi yêu cầu, bất kể nguồn gốc."
    },
    {
        "id": 18,
        "type": "True False",
        "question": "Control is a key privacy principle of Microsoft",
        "question_vi": "Kiểm soát là một nguyên tắc quan trọng về quyền riêng tư của Microsoft",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 19,
        "type": "True False",
        "question": "Transparency is a key privacy principle of Microsoft",
        "question_vi": "Minh bạch là một nguyên tắc quan trọng về quyền riêng tư của Microsoft",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 20,
        "type": "True False",
        "question": "Shared responsibility is a key privacy principle of Microsoft",
        "question_vi": "Trách nhiệm chia sẻ là một nguyên tắc quan trọng về quyền riêng tư của Microsoft",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 21,
        "type": "Choose the correct answer",
        "question": "??? a file makes the data in the file readable and usable to viewers that have the appropriate key",
        "question_vi": "??? một tệp làm cho dữ liệu trong tệp có thể đọc được và sử dụng được cho những người xem có khóa thích hợp",
        "options": [
            "Archieving",
            "Compressing",
            "Deduplicating",
            "Encrypting"
        ],
        "answer": "Encrypting",
        "explanation_vi": ""
    },
    {
        "id": 22,
        "type": "True False",
        "question": "Digitally signing a document requires a private key",
        "question_vi": "Ký số một tài liệu yêu cầu một khóa bí mật",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 23,
        "type": "True False",
        "question": "Verifing the authenticity of a digitally signed document requires the public key of the signer",
        "question_vi": "Xác minh tính xác thực của một tài liệu được ký số yêu cầu khóa công khai của người ký",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 24,
        "type": "True False",
        "question": "Verifing the authenticity of a digitally signed document requires the private key of the signer",
        "question_vi": "Xác minh tính xác thực của một tài liệu được ký số yêu cầu khóa bí mật của người ký",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 25,
        "type": "Choose the correct answer",
        "question": "When users sign in to the Azure portal, they are first ???",
        "question_vi": "Khi người dùng đăng nhập vào cổng Azure, họ được ???",
        "options": [
            "authenticated",
            "authorized",
            "resolved",
            "assigned permissions"
        ],
        "answer": "authenticated",
        "explanation_vi": ""
    },
    {
        "id": 26,
        "type": "Choose the correct answer",
        "question": "??? is the process of identifying whether a signed-in user can access a specific resource",
        "question_vi": "??? là quá trình xác định xem người dùng đã đăng nhập có thể truy cập một tài nguyên cụ thể hay không",
        "options": [
            "Authentication",
            "Authorization",
            "Federation",
            "Single Sign-On (SSO)"
        ],
        "answer": "Authorization",
        "explanation_vi": ""
    },
    {
        "id": 27,
        "type": "Choose the correct answer",
        "question": "??? enables collaboration with bussiness partners from external organizations such as suppliers, partners, and vendors. External users appear as guest users in the directory",
        "question_vi": "??? cho phép cộng tác với các đối tác kinh doanh từ các tổ chức bên ngoài như nhà cung cấp, đối tác và nhà cung cấp. Người dùng bên ngoài xuất hiện dưới dạng người dùng khách trong thư mục",
        "options": [
            "Active Directory Domain Services (AD DS)",
            "Active Directory forest trusts",
            "Azure Active Directory (Azure AD) Bussiness-to-Bussiness (B2B)",
            "Azure Active Directory (Azure AD) Bussiness-to-Consumer (B2C)"
        ],
        "answer": "Azure Active Directory (Azure AD) Bussiness-to-Bussiness (B2B)",
        "explanation_vi": "Tính năng cộng tác doanh nghiệp với doanh nghiệp (B2B) trong Azure Active Directory (Azure AD) là một phần của External Identities cho phép bạn mời người dùng khách cộng tác với tổ chức của mình. Với tính năng cộng tác B2B, bạn có thể chia sẻ các ứng dụng và dịch vụ của công ty mình một cách an toàn với người dùng khách từ bất kỳ tổ chức nào khác, đồng thời vẫn duy trì quyền kiểm soát dữ liệu doanh nghiệp của riêng mình."
    },
    {
        "id": 28,
        "type": "Multiple Choices",
        "question": "In the Microsoft Cloud Adoption Framework for Azure, which two phases are addressed before the Ready phase? Each correct answer presents a complete solution.",
        "question_vi": "Trong Microsoft Cloud Adoption Framework cho Azure, giai đoạn nào được giải quyết trước giai đoạn Ready? Mỗi câu trả lời đúng trình bày một giải pháp hoàn chỉnh.",
        "options": [
            "Adopt",
            "Plan",
            "Define Strategy",
            "Govern",
            "Manage"
        ],
        "answer": [
            "Define Strategy",
            "Plan"
        ],
        "explanation_vi": "Cloud Adoption Framework: strategy, plan, ready, adopt, govern, manage (SPRAGM)"
    },
    {
        "id": 29,
        "type": "True False",
        "question": "In software as a service (SaaS), applying service packs to applications is the responsibility of the organization",
        "question_vi": "Trong phần mềm như một dịch vụ (SaaS), việc áp dụng các gói dịch vụ cho ứng dụng là trách nhiệm của tổ chức.",
        "answer": false,
        "explanation_vi": "Với SaaS thì Cloud Provider phải chịu trách nhiệm về việc áp dụng các gói dịch vụ cho ứng dụng."
    },
    {
        "id": 30,
        "type": "True False",
        "question": "In infrastructure as a service (IaaS), managing the physical network is the responsibility of the cloud provider",
        "question_vi": "Trong hạ tầng như một dịch vụ (IaaS), việc quản lý mạng vật lý là trách nhiệm của nhà cung cấp đám mây.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 31,
        "type": "True False",
        "question": "In all Azure cloud deployment types, managing the security of information and data is the responsibility of the organization",
        "question_vi": "Trong tất cả các loại hình triển khai đám mây Azure, việc quản lý bảo mật thông tin và dữ liệu là trách nhiệm của tổ chức",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 32,
        "type": "True False",
        "question": "Azure AD Connect can be used to implement hybrid identity",
        "question_vi": "Azure AD Connect có thể được sử dụng để triển khai danh tính lai",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 33,
        "type": "True False",
        "question": "Hybrid identity requires the implementation of two Microsoft 365 tenants",
        "question_vi": "Danh tính lai đòi hỏi việc triển khai hai tenant Microsoft 365",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 34,
        "type": "True False",
        "question": "Authentication of hybrid identities requires the synchroniztion of Active Directory Domain Services (AD DS) and Azure Active Directory (Azure AD)",
        "question_vi": "Xác thực của danh tính lai đòi hỏi sự đồng bộ hóa của Active Directory Domain Services (AD DS) và Azure Active Directory (Azure AD)",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 35,
        "type": "Choose the correct answer",
        "question": "??? provides benchmark recommendations and guidance for protecting Azure services",
        "question_vi": "??? cung cấp các đề xuất và hướng dẫn chuẩn mực để bảo vệ các dịch vụ Azure",
        "options": [
            "Azure Applications Insights",
            "Azure Network Watcher",
            "Log Analytics workspaces",
            "Security baselines for Azure"
        ],
        "answer": "Security baselines for Azure",
        "explanation_vi": "Các tiêu chuẩn bảo mật cơ bản cho Azure giúp bạn tăng cường bảo mật thông qua các công cụ, tính năng theo dõi và bảo mật được cải tiến. Chúng cũng mang lại cho bạn trải nghiệm nhất quán khi bảo vệ môi trường của mình."
    },
    {
        "id": 36,
        "type": "Choose the correct answer",
        "question": "What is an example of encryption at rest?",
        "question_vi": "Ví dụ về mã hóa dữ liệu lưu trữ là gì?",
        "options": [
            "A. encrypting communications by using a site-to-site VPN",
            "B. encrypting a virtual machine disk",
            "C. accessing a website by using an encrypted HTTPS connection",
            "D. sending an encrypted email"
        ],
        "answer": "B. encrypting a virtual machine disk",
        "explanation_vi": "A C D là mã hóa dữ liệu khi truyền tải (in transit), B là mã hóa dữ liệu khi lưu trữ (at rest)."
    },
    {
        "id": 37,
        "type": "Multiple Choices",
        "question": "Which three statements accurately describe the guiding principles of Zero Trust?",
        "question_vi": "Ba phát biểu nào mô tả chính xác các nguyên tắc hướng dẫn của Zero Trust?",
        "options": [
            "Define the perimeter by physical locations.",
            "Use identity as the primary security boundary.",
            "Always verify the permissions of a user explicitly.",
            "Always assume that the user system can be breached.",
            "Use the network as the primary security boundary."
        ],
        "answer": [
            "Use identity as the primary security boundary.",
            "Always verify the permissions of a user explicitly.",
            "Always assume that the user system can be breached."
        ],
        "explanation_vi": ""
    },
    {
        "id": 39,
        "type": "Choose the correct answer",
        "question": "You are evaluating the compliance score in Compliance Manager: ??? - Encrypt data at rest",
        "question_vi": "Bạn đang đánh giá điểm tuân thủ trong Compliance Manager, hành động 'mã hóa dữ liệu khi lưu trữ' mang tính chất ???",
        "options": [
            "Corrective",
            "Detective",
            "Preventive"
        ],
        "answer": "Preventive",
        "explanation_vi": "Mã hoá dữ liệu khi lưu trữ là hành động mang tính chủ động"
    },
    {
        "id": 40,
        "type": "Choose the correct answer",
        "question": "You are evaluating the compliance score in Compliance Manager: ??? - perform a system access audit",
        "question_vi": "Bạn đang đánh giá điểm tuân thủ trong Compliance Manager, hành động 'thực hiện kiểm tra truy cập hệ thống' mang tính chất ???",
        "options": [
            "Corrective",
            "Detective",
            "Preventive"
        ],
        "answer": "Detective",
        "explanation_vi": "Thực hiện kiểm tra truy cập hệ thống là hành động mang tính điều tra"
    },
    {
        "id": 41,
        "type": "Choose the correct answer",
        "question": "You are evaluating the compliance score in Compliance Manager: ??? - make configuration changes in response to a security incident",
        "question_vi": "Bạn đang đánh giá điểm tuân thủ trong Compliance Manager, hành động 'thực hiện thay đổi cấu hình để phản ứng với sự cố bảo mật' mang tính chất ???",
        "options": [
            "Corrective",
            "Detective",
            "Preventive"
        ],
        "answer": "Corrective",
        "explanation_vi": "Thực hiện thay đổi cấu hình để phản ứng với sự cố bảo mật là hành động mang tính khắc phục"
    },
    {
        "id": 42,
        "type": "Choose the correct answer",
        "question": "Compliance Manager can be directly accessed from the ???",
        "question_vi": "Compliance Manager có thể được truy cập trực tiếp từ ???",
        "options": [
            "Microsoft 365 admin center",
            "Microsoft 365 Defender portal",
            "Microsoft 365 Compliance center",
            "Microsoft Support portal"
        ],
        "answer": "Microsoft 365 Compliance center",
        "explanation_vi": "Trung tâm tuân thủ (Compliance Centre) hiện được gọi là Microsoft Purview."
    },
    {
        "id": 43,
        "type": "True or False",
        "question": "Enabling multi-factor authentication (MFA) increase the Microsoft Security Score.",
        "question_vi": "Bật xác thực đa yếu tố (MFA) làm tăng Điểm bảo mật Microsoft.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 44,
        "type": "True or False",
        "question": "A higher Microsoft Security Score means a lower identified risk level in the Microsoft 365 tenant",
        "question_vi": "Điểm bảo mật Microsoft càng cao có nghĩa là mức độ rủi ro được xác định trong tenant Microsoft 365 càng thấp",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 45,
        "type": "True or False",
        "question": "Microsoft Secure Score measures progress in completing actions based on controls that include key regulations and standards for data protection and governance.",
        "question_vi": "Điểm bảo mật Microsoft đo lường tiến độ hoàn thành các hành động dựa trên các biện pháp kiểm soát bao gồm các quy định và tiêu chuẩn chính về bảo vệ và quản trị dữ liệu.",
        "answer": false,
        "explanation_vi": "regulations and standards => Compliance Score. Compliance Manager cung cấp cho bạn Compliance Score ban đầu dựa trên tiêu chuẩn bảo vệ dữ liệu cơ bản của Microsoft 365."
    },
    {
        "id": 46,
        "type": "Choose the correct answer",
        "question": "What can you use to provide a user with a two-hour window to complete an administrative task in Azure?",
        "question_vi": "Bạn có thể sử dụng gì để cung cấp cho người dùng một cửa sổ hai giờ để hoàn thành một tác vụ quản trị trong Azure?",
        "options": [
            "Azure AD Privileged Identity Management (PIM)",
            "Azure AD Identity Protection",
            "Azure Multi-Factor Authentication (MFA)",
            "Azure AD Conditional Access Policies"
        ],
        "answer": "Azure AD Privileged Identity Management (PIM)",
        "explanation_vi": "Quản lý danh tính đặc quyền (PIM) cung cấp tính năng kích hoạt vai trò dựa trên thời gian và phê duyệt để giảm thiểu rủi ro về việc cấp quyền truy cập quá mức, không cần thiết hoặc lạm dụng đối với các tài nguyên mà bạn quan tâm."
    },
    {
        "id": 47,
        "type": "Choose the correct answer",
        "question": "In a hybrid identity model, what can you use to sync identities between Active Directory Domain Services (AD DS) and Azure Active Directory (Azure AD)?",
        "question_vi": "Trong mô hình danh tính lai, bạn có thể sử dụng gì để đồng bộ hóa danh tính giữa Active Directory Domain Services (AD DS) và Azure Active Directory (Azure AD)?",
        "options": [
            "Azure AD Connect",
            "Active Directory Federation Services (AD FS)",
            "Microsoft Sentinel",
            "Azure AD Privileged Identity Management (PIM)"
        ],
        "answer": "Azure AD Connect",
        "explanation_vi": "Azure AD Connect là công cụ được sử dụng để đồng bộ hóa danh tính giữa Active Directory Domain Services (AD DS) và Azure Active Directory (Azure AD)."
    },
    {
        "id": 48,
        "type": "True False",
        "question": "You can create custom roles in Azure Active Directory (Azure AD)",
        "question_vi": "Bạn có thể tạo các vai trò tùy chỉnh trong Azure Active Directory (Azure AD)",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 49,
        "type": "True False",
        "question": "Global Administrator is a role in Azure Active Directory (Azure AD)",
        "question_vi": "Global Administrator là một vai trò trong Azure Active Directory (Azure AD)",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 50,
        "type": "True False",
        "question": "An Azure Active Directory (Azure AD) user can be assigned only one role",
        "question_vi": "Một người dùng Azure Active Directory (Azure AD) chỉ có thể được gán một vai trò",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 51,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) is deployed in an on-premises environment",
        "question_vi": "Azure Active Directory (Azure AD) được triển khai trong môi trường on-premises",
        "answer": false,
        "explanation_vi": "Azure AD là một dịch vụ dựa trên đám mây"
    },
    {
        "id": 52,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) is provided as part of a Microsoft 365 subscription",
        "question_vi": "Azure Active Directory (Azure AD) được cung cấp như một phần của gói đăng ký Microsoft 365",
        "answer": true,
        "explanation_vi": "Microsoft 365 sử dụng Azure Active Directory (Azure AD). Azure Active Directory (Azure AD) đã được bao gồm trong gói đăng ký Microsoft 365 của bạn."
    },
    {
        "id": 53,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) is an indentity and access management service",
        "question_vi": "Azure Active Directory (Azure AD) là một dịch vụ quản lý danh tính và truy cập",
        "answer": true,
        "explanation_vi": "Azure Active Directory (Azure AD) là một dịch vụ xác thực và quản lý danh tính người dùng dựa trên nền tảng đám mây."
    },
    {
        "id": 54,
        "type": "Choose the correct answer",
        "question": "With Windows Hello for Bussiness, an user's biometric data used for authentication is stored on the user's device",
        "question_vi": "Với Windows Hello for Bussiness, dữ liệu sinh trắc học của người dùng được sử dụng để xác thực được lưu trữ trên thiết bị của người dùng",
        "options": [
            "is stored on an external device",
            "is stored on a local device only",
            "is stored in Azure Active Directory (Azure AD)",
            "is replicated to all the devices designated by the user"
        ],
        "answer": "is stored on a local device only",
        "explanation_vi": "Windows Hello for Business sử dụng xác thực dựa trên thiết bị, nghĩa là dữ liệu sinh trắc học của người dùng được lưu trữ trên thiết bị của họ và không được đồng bộ hóa với bất kỳ thiết bị nào khác."
    },
    {
        "id": 55,
        "type": "Choose the correct answer",
        "question": "What is the purpose of Azure Active Directory (Azure AD) Password Protection?",
        "question_vi": "Mục đích của Azure Active Directory (Azure AD) Password Protection là gì?",
        "options": [
            "to control how often users must change their passwords",
            "to identify devices to which users can sign in without using multi-factor authentication (MFA)",
            "to encrypt a password by using globally recognized encryption standards",
            "to prevent users from using specific words in their passwords"
        ],
        "answer": "to prevent users from using specific words in their passwords",
        "explanation_vi": "Azure AD Password Protection phát hiện và chặn các mật khẩu yếu đã biết và các biến thể của chúng, đồng thời cũng có thể chặn thêm các thuật ngữ yếu khác dành riêng cho tổ chức của bạn. Với Azure AD Password Protection, danh sách mật khẩu bị cấm toàn cầu mặc định sẽ tự động được áp dụng cho tất cả người dùng trong một tenant Azure AD. Để hỗ trợ nhu cầu bảo mật và kinh doanh riêng của bạn, bạn có thể định nghĩa các mục trong danh sách mật khẩu bị cấm tùy chỉnh."
    },
    {
        "id": 56,
        "type": "Choose the correct answer",
        "question": "Which Azure Active Directory (Azure AD) feature can you use to evaluate group membership and automatically remove users that no longer require membership in a group?",
        "question_vi": "Tính năng nào của Azure Active Directory (Azure AD) có thể được sử dụng để đánh giá tư cách thành viên nhóm và tự động xóa người dùng không còn yêu cầu tư cách thành viên trong một nhóm?",
        "options": [
            "Access reviews",
            "Managed identities",
            "Conditional access policies",
            "Azure AD Identity Protection"
        ],
        "answer": "Access reviews",
        "explanation_vi": "Tính năng xem xét quyền truy cập của Azure Active Directory (Azure AD) cho phép các tổ chức quản lý hiệu quả tư cách thành viên nhóm, quyền truy cập vào các ứng dụng doanh nghiệp và phân công vai trò."
    },
    {
        "id": 57,
        "type": "Choose the correct answer",
        "question": "??? requires additional verification, such as a verification code sent to a mobile phone.",
        "question_vi": "??? yêu cầu xác minh bổ sung, chẳng hạn như mã xác minh được gửi đến điện thoại di động.",
        "options": [
            "Multi-factor authentication (MFA)",
            "Pass-through authentication",
            "Password writeback",
            "Single Sign-On (SSO)"
        ],
        "answer": "Multi-factor authentication (MFA)",
        "explanation_vi": ""
    },
    {
        "id": 58,
        "type": "True False",
        "question": "Conditional Access policies can use the device state as a signal",
        "question_vi": "Các chính sách truy cập có điều kiện có thể sử dụng trạng thái thiết bị làm tín hiệu",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 59,
        "type": "True False",
        "question": "Conditional Access policies apply before first-actor authentication is complete",
        "question_vi": "Các chính sách truy cập có điều kiện được áp dụng trước khi xác thực lần đầu tiên hoàn tất",
        "answer": false,
        "explanation_vi": "Các chính sách truy cập có điều kiện được thực thi sau khi quá trình xác thực yếu tố đầu tiên hoàn tất."
    },
    {
        "id": 60,
        "type": "True False",
        "question": "Conditional Access policies can trigger multi-factor authentication (MFA) if a user attempts to access a specific application",
        "question_vi": "Các chính sách truy cập có điều kiện có thể kích hoạt xác thực đa yếu tố (MFA) nếu người dùng cố gắng truy cập một ứng dụng cụ thể",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 61,
        "type": "Choose the correct answer",
        "question": "??? is a cloud-based solution that leverages on-premises Active Directory signals to identify, detect, and investigate advanced threats",
        "question_vi": "??? là một giải pháp dựa trên đám mây tận dụng tín hiệu của Active Directory tại chỗ để xác định, phát hiện và điều tra các mối đe dọa nâng cao",
        "options": [
            "Microsoft Defender for Cloud Apps",
            "Microsoft Defender for Endpoint",
            "Microsoft Defender for Identity",
            "Microsoft Defender for Office 365"
        ],
        "answer": "Microsoft Defender for Identity",
        "explanation_vi": ""
    },
    {
        "id": 62,
        "type": "Choose the correct answer",
        "question": "Microsoft Defender for Identity can identify advanced threats from ??? signals",
        "question_vi": "Microsoft Defender for Identity có thể xác định các mối đe dọa nâng cao từ tín hiệu của ???",
        "options": [
            "Azure Active Directory (Azure AD)",
            "Azure AD Connect",
            "on-premises Active Directory Domain Services (AD DS)"
        ],
        "answer": "on-premises Active Directory Domain Services (AD DS)",
        "explanation_vi": ""
    },
    {
        "id": 63,
        "type": "Choose the correct answer",
        "question": "Azure Active Directory (Azure AD) is ??? used for authentication and authorization",
        "question_vi": "Azure Active Directory (Azure AD) là ??? được sử dụng cho xác thực và ủy quyền",
        "options": [
            "an extended detection and response (XDR) system",
            "an identity provider",
            "a mangement group",
            "a security information and event management (SIEM) system"
        ],
        "answer": "an identity provider",
        "explanation_vi": ""
    },
    {
        "id": 64,
        "type": "Choose the correct answer",
        "question": "Which Azure Active Directory (Azure AD) feature can you use to provide just-in-time (JIT) access to manage Azure resources?",
        "question_vi": "Tính năng nào của Azure Active Directory (Azure AD) có thể được sử dụng để cung cấp quyền truy cập just-in-time (JIT) để quản lý tài nguyên Azure?",
        "options": [
            "Azure AD Identity Protection",
            "Azure AD Privileged Identity Management (PIM)",
            "authentication method policies",
            "conditional access policies"
        ],
        "answer": "Azure AD Privileged Identity Management (PIM)",
        "explanation_vi": ""
    },
    {
        "id": 65,
        "type": "Multiple Choices",
        "question": "Which three authentication methods can be used by Azure Multi-Factor Authentication (MFA)?",
        "question_vi": "Ba phương thức xác thực nào có thể được sử dụng bởi Azure Multi-Factor Authentication (MFA)?",
        "options": [
            "text message (SMS)",
            "Microsoft Authenticator app",
            "email verification",
            "phone call",
            "security question"
        ],
        "answer": [
            "Microsoft Authenticator app",
            "text message (SMS)",
            "phone call"
        ],
        "explanation_vi": ""
    },
    {
        "id": 66,
        "type": "Choose the correct answer",
        "question": "Which Microsoft 365 feature can you use to restrict communication and the sharing of information between members of two departments at your organization?",
        "question_vi": "Bạn có thể sử dụng tính năng nào của Microsoft 365 để hạn chế giao tiếp và chia sẻ thông tin giữa các thành viên của hai phòng ban trong tổ chức của bạn?",
        "options": [
            "sensitivity label policies",
            "Customer Lockbox",
            "information barriers",
            "Privileged Access Management (PAM)"
        ],
        "answer": "information barriers",
        "explanation_vi": ""
    },
    {
        "id": 67,
        "type": "True False",
        "question": "Conditional access policies always enforce the use of multi-factor authentication (MFA)",
        "question_vi": "Các chính sách truy cập có điều kiện luôn bắt buộc sử dụng xác thực đa yếu tố (MFA)",
        "answer": false,
        "explanation_vi": "Các chính sách truy cập có điều kiện có thể yêu cầu xác thực đa yếu tố (MFA), nhưng không phải lúc nào cũng bắt buộc."
    },
    {
        "id": 68,
        "type": "True False",
        "question": "Conditional access policies can be used to block access to an application based on the location of the user",
        "question_vi": "Các chính sách truy cập có điều kiện có thể được sử dụng để chặn truy cập vào một ứng dụng dựa trên vị trí của người dùng",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 69,
        "type": "True False",
        "question": "Conditional access policies only affect users who have Azure Active Directory (Azure AD) joined devices",
        "question_vi": "Các chính sách truy cập có điều kiện chỉ ảnh hưởng đến người dùng có thiết bị được tham gia Azure Active Directory (Azure AD)",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 70,
        "type": "True False",
        "question": "Conditional access policies can be applied to global administrators.",
        "question_vi": "Các chính sách truy cập có điều kiện có thể được áp dụng cho quản trị viên toàn cục.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 71,
        "type": "True False",
        "question": "Conditional access policies are evaluated before a user is authenticated.",
        "question_vi": "Các chính sách truy cập có điều kiện được đánh giá trước khi người dùng được xác thực.",
        "answer": false,
        "explanation_vi": "Các chính sách truy cập có điều kiện được đánh giá sau khi người dùng được xác thực."
    },
    {
        "id": 72,
        "type": "True False",
        "question": "Conditional access policies can use a device platform, such as Android or iOS, as a signal",
        "question_vi": "Các chính sách truy cập có điều kiện có thể sử dụng nền tảng thiết bị, chẳng hạn như Android hoặc iOS, làm tín hiệu",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 73,
        "type": "Choose the correct answer",
        "question": "Application registered is Azure Active Directory (Azure AD) are associated automatically to a ???.",
        "question_vi": "Ứng dụng đã đăng ký là ứng dụng Azure Active Directory (Azure AD) được liên kết tự động với một ???.",
        "options": [
            "guest account",
            "managed identity",
            "service principal",
            "user account"
        ],
        "answer": "service principal",
        "explanation_vi": "Khi bạn đăng ký một ứng dụng thông qua cổng Azure, một đối tượng ứng dụng và một principal dịch vụ sẽ tự động được tạo trong thư mục chính hoặc tenant của bạn."
    },
    {
        "id": 74,
        "type": "Multiple Choices",
        "question": "Windows Hello for Business supports three authentication methods. Which three?",
        "question_vi": "Windows Hello for Business hỗ trợ ba phương thức xác thực nào?",
        "options": [
            "fingerprint",
            "facial recognition",
            "PIN",
            "email verification",
            "security question"
        ],
        "answer": [
            "fingerprint",
            "facial recognition",
            "PIN"
        ],
        "explanation_vi": ""
    },
    {
        "id": 75,
        "type": "Choose the correct answer",
        "question": "When you enable security defaults in Azure Actice Directory (Azure AD), ??? will be enabled for all Azure AD users.",
        "question_vi": "Khi bạn bật bảo mật mặc định trong Azure Actice Directory (Azure AD), ??? sẽ được bật cho tất cả người dùng Azure AD.",
        "options": [
            "Azure AD Identity Protection",
            "Azure AD Privileged Identity Management (PIM)",
            "multi-factor authentication (MFA)"
        ],
        "answer": "multi-factor authentication (MFA)",
        "explanation_vi": ""
    },
    {
        "id": 76,
        "type": "Choose the correct answer",
        "question": "You have an Azure subscription. You need to implement approval-based, time-bound role activation. What should you use?",
        "question_vi": "Bạn có một thuê bao Azure. Bạn cần triển khai kích hoạt vai trò dựa trên phê duyệt, có giới hạn thời gian. Bạn nên sử dụng gì?",
        "options": [
            "Windows Hello for Business",
            "Azure Active Directory (Azure AD) Identity Protection",
            "access reviews in Azure Active Directory (Azure AD)",
            "Azure AD Privileged Identity Management (PIM)"
        ],
        "answer": "Azure AD Privileged Identity Management (PIM)",
        "explanation_vi": ""
    },
    {
        "id": 77,
        "type": "True False",
        "question": "Global Administrators are exempt from conditional access policies.",
        "question_vi": "Quản trị viên toàn cục được miễn trừ khỏi các chính sách truy cập có điều kiện.",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 78,
        "type": "True False",
        "question": "A conditional access policy can add users to Azure Active Directory (Azure AD) roles",
        "question_vi": "Một chính sách truy cập có điều kiện có thể thêm người dùng vào các vai trò Azure Active Directory (Azure AD)",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 79,
        "type": "True False",
        "question": "Conditional access policies can force the use of multi-factor authentication (MFA) to access cloud apps.",
        "question_vi": "Các chính sách truy cập có điều kiện có thể buộc sử dụng xác thực đa yếu tố (MFA) để truy cập các ứng dụng đám mây.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 80,
        "type": "Multiple Choices",
        "question": "When security defaults are enabled for an Azure Active Directory (Azure AD) tenant, which two requirements are enforced?",
        "question_vi": "Khi bảo mật mặc định được bật cho một tenant Azure Active Directory (Azure AD), 2 yêu cầu nào sau đây được thực thi?",
        "options": [
            "All users must authenticate from a registered device.",
            "Administrators must always use Azure Multi-Factor Authentication (MFA).",
            "Azure Multi-Factor Authentication (MFA) registration is required for all users.",
            "All users must authenticate by using passwordless sign-in.",
            "All users must authenticate by using Windows Hello."
        ],
        "answer": [
            "Administrators must always use Azure Multi-Factor Authentication (MFA).",
            "Azure Multi-Factor Authentication (MFA) registration is required for all users."
        ],
        "explanation_vi": ""
    },
    {
        "id": 81,
        "type": "Choose the correct answer",
        "question": "Which type of identity is created when you register an application with Active Directory (Azure AD)?",
        "question_vi": "Loại danh tính nào được tạo khi bạn đăng ký một ứng dụng với Active Directory (Azure AD)?",
        "options": [
            "a user account",
            "a user-assigned managed identity",
            "a service principal",
            "a system-assigned managed identity"
        ],
        "answer": "a service principal",
        "explanation_vi": "Khi bạn đăng ký một ứng dụng trong Azure AD, một đối tượng ứng dụng và một principal dịch vụ sẽ được tạo trong tenant của bạn. Principal dịch vụ là một danh tính được sử dụng bởi ứng dụng để truy cập tài nguyên Azure."
    },
    {
        "id": 82,
        "type": "Multiple Choices",
        "question": "Which three tasks can be performed by using Azure Active Directory (Azure AD) Identity Protection?",
        "question_vi": "Ba nhiệm vụ nào sau đây có thể được thực hiện bằng cách sử dụng Azure Active Directory (Azure AD) Identity Protection?",
        "options": [
            "A. Configure external access for partner organizations.",
            "B. Export risk detection to third-party utilities.",
            "C. Automate the detection and remediation of identity based-risks.",
            "D. Investigate risks that relate to user authentication.",
            "E. Create and automatically assign sensitivity labels to data."
        ],
        "answer": [
            "B. Export risk detection to third-party utilities.",
            "C. Automate the detection and remediation of identity based-risks.",
            "D. Investigate risks that relate to user authentication."
        ],
        "explanation_vi": "A không phải là mục đích của việc Bảo vệ Danh tính. E thiên về Tuân thủ và Bảo vệ Dữ liệu hơn, chứ không phải các vấn đề liên quan đến danh tính."
    },
    {
        "id": 83,
        "type": "Choose the correct answer",
        "question": "When using multi-factor authentication (MDF), a password is considered somthing you ???",
        "question_vi": "Khi sử dụng xác thực đa yếu tố (MDF), mật khẩu được coi là thứ bạn ???",
        "options": [
            "know",
            "have",
            "are",
            "share"
        ],
        "answer": "know",
        "explanation_vi": ""
    },
    {
        "id": 84,
        "type": "True False",
        "question": "Windows Hello for Bussiness can use the Microsoft Authentication app as an authentication method.",
        "question_vi": "Windows Hello for Bussiness có thể sử dụng ứng dụng Microsoft Authentication làm phương thức xác thực.",
        "answer": false,
        "explanation_vi": "Ứng dụng Microsoft Authenticator giúp bạn đăng nhập vào tài khoản khi sử dụng xác thực hai yếu tố. Xác thực hai yếu tố giúp bạn sử dụng tài khoản an toàn hơn vì mật khẩu có thể bị quên, bị đánh cắp hoặc bị lộ. Xác thực hai yếu tố sử dụng yếu tố thứ hai như số điện thoại của bạn để khiến người khác khó xâm nhập vào tài khoản của bạn hơn."
    },
    {
        "id": 85,
        "type": "True False",
        "question": "Windows Hello for Bussiness can use a PIN code as an authentication method.",
        "question_vi": "Windows Hello for Bussiness có thể sử dụng mã PIN làm phương thức xác thực.",
        "answer": true,
        "explanation_vi": "Trong Windows 10, Windows Hello for Business thay thế mật khẩu bằng xác thực hai yếu tố mạnh mẽ trên các thiết bị. Quá trình xác thực này bao gồm một loại thông tin đăng nhập người dùng mới được liên kết với thiết bị và sử dụng sinh trắc học hoặc mã PIN."
    },
    {
        "id": 86,
        "type": "True False",
        "question": "Windows Hello for Bussiness authentication information syncs across all the devices registered by a user.",
        "question_vi": "Thông tin xác thực Windows Hello for Bussiness được đồng bộ hóa trên tất cả các thiết bị được đăng ký bởi một người dùng.",
        "answer": false,
        "explanation_vi": "Thông tin xác thực Windows Hello dựa trên chứng chỉ hoặc cặp khóa bất đối xứng. Thông tin xác thực Windows Hello có thể được liên kết với thiết bị, và mã thông báo nhận được bằng thông tin xác thực đó cũng được liên kết với thiết bị."
    },
    {
        "id": 87,
        "type": "Choose the correct answer",
        "question": "An Azure resource can use a system-assigned ??? to access Azure services.",
        "question_vi": "Một tài nguyên Azure có thể sử dụng ??? được gán bởi hệ thống để truy cập các dịch vụ Azure.",
        "options": [
            "Azure Active Directory (Azure AD) joined device",
            "managed identity",
            "service principal",
            "user identity"
        ],
        "answer": "managed identity",
        "explanation_vi": "Danh tính được quản lý cung cấp một danh tính để các ứng dụng sử dụng khi kết nối với các tài nguyên hỗ trợ xác thực Azure Active Directory (Azure AD). Bạn không cần phải quản lý thông tin đăng nhập. Thậm chí bạn cũng không thể truy cập thông tin đăng nhập đó. Bạn có thể sử dụng danh tính được quản lý để xác thực với bất kỳ tài nguyên nào hỗ trợ xác thực Azure AD, bao gồm cả các ứng dụng của riêng bạn."
    },
    {
        "id": 88,
        "type": "Choose the correct answer",
        "question": "You can use ??? in the Microsoft 365 Defender portal to identify devices that are affected by an alert.",
        "question_vi": "Bạn có thể sử dụng ??? trong cổng Microsoft 365 Defender để xác định các thiết bị bị ảnh hưởng bởi một cảnh báo.",
        "options": [
            "classifications",
            "incidents",
            "policies",
            "Secure Score"
        ],
        "answer": "incidents",
        "explanation_vi": ""
    },
    {
        "id": 89,
        "type": "Multiple Choices",
        "question": "What are two capabilities of Microsoft Defender for Endpoint?",
        "question_vi": "Hai khả năng của Microsoft Defender for Endpoint là gì?",
        "options": [
            "automated investigation and remediation",
            "transport encryption",
            "shadow IT detection",
            "attack surface reduction"
        ],
        "answer": [
            "automated investigation and remediation",
            "attack surface reduction"
        ],
        "explanation_vi": ""
    },
    {
        "id": 91,
        "type": "Choose the correct answer",
        "question": "??? is a cloud-native security information and event management (SIEM) and security orchestration automated response (SOAR) solution used to provide a single solution for alert detection, threat visibility, proactive hunting, and threat response.",
        "question_vi": "??? là một giải pháp quản lý thông tin và sự kiện bảo mật (SIEM) và tự động hóa phản hồi điều phối bảo mật (SOAR) gốc trên đám mây được sử dụng để cung cấp một giải pháp duy nhất cho việc phát hiện cảnh báo, khả năng hiển thị mối đe dọa, săn lùng chủ động và phản ứng với mối đe dọa.",
        "options": [
            "Azure Advisor",
            "Azure Bastion",
            "Azure Monitor",
            "Azure Sentinel"
        ],
        "answer": "Azure Sentinel",
        "explanation_vi": ""
    },
    {
        "id": 92,
        "type": "True False",
        "question": "Azure Defender can detect vulnerabilities and threats for Azure Storage.",
        "question_vi": "Azure Defender có thể phát hiện các lỗ hổng và mối đe dọa cho Azure Storage.",
        "answer": true,
        "explanation_vi": "Microsoft Defender for Cloud cung cấp cảnh báo bảo mật và khả năng bảo vệ nâng cao trước các mối đe dọa cho máy ảo, cơ sở dữ liệu SQL, container, ứng dụng web, mạng, bộ nhớ lưu trữ của bạn và nhiều hơn nữa."
    },
    {
        "id": 93,
        "type": "True False",
        "question": "Cloud Security Posture Management (CSPM) is available for all Azure subscriptions.",
        "question_vi": "Cloud Security Posture Management (CSPM) có sẵn cho tất cả các gói đăng ký Azure.",
        "answer": true,
        "explanation_vi": "Quản lý tư thế bảo mật đám mây (CSPM) được cung cấp miễn phí cho tất cả người dùng Azure."
    },
    {
        "id": 94,
        "type": "True False",
        "question": "Azure Security Center can evaluate the security of workloads deployed to Azure or on-premises.",
        "question_vi": "Azure Security Center có thể đánh giá bảo mật của các workload được triển khai trên Azure hoặc tại chỗ.",
        "answer": true,
        "explanation_vi": "Azure Security Center là một hệ thống quản lý an ninh cơ sở hạ tầng thống nhất, giúp tăng cường khả năng bảo mật cho các trung tâm dữ liệu của bạn và cung cấp khả năng bảo vệ mối đe dọa nâng cao cho các khối lượng công việc lai của bạn trên đám mây - cho dù chúng nằm trên Azure hay không - cũng như on-premises."
    },
    {
        "id": 95,
        "type": "Choose the correct answer",
        "question": "You can use ??? in the Microsoft 365 security center to view an aggreation of alerts that relate to the same attack.",
        "question_vi": "Bạn có thể sử dụng ??? trong trung tâm bảo mật Microsoft 365 để xem một tập hợp các cảnh báo liên quan đến cùng một cuộc tấn công.",
        "options": [
            "Reports",
            "Hunting",
            "Attack simulator",
            "Incidents"
        ],
        "answer": "Incidents",
        "explanation_vi": ""
    },
    {
        "id": 96,
        "type": "True False",
        "question": "Network security groups (NSGs) can deny inbound traffic from the internet.",
        "question_vi": "Network security groups (NSGs) có thể chặn lưu lượng truy cập đến từ internet.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 97,
        "type": "True False",
        "question": "Network security groups (NSGs) can deny outbound traffic to the internet.",
        "question_vi": "Network security groups (NSGs) có thể chặn lưu lượng truy cập đi ra internet.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 98,
        "type": "True False",
        "question": "Network security groups (NSGs) can filter traffic based on IP address, port, and protocol.",
        "question_vi": "Network security groups (NSGs) có thể lọc lưu lượng truy cập dựa trên địa chỉ IP, cổng và giao thức.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 99,
        "type": "True False",
        "question": "Microsoft Intune can be used to manage Android devices.",
        "question_vi": "Microsoft Intune có thể được sử dụng để quản lý các thiết bị Android.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 100,
        "type": "True False",
        "question": "Microsoft Intune can be used to provision Azure subscriptions.",
        "question_vi": "Microsoft Intune có thể được sử dụng để cung cấp các gói đăng ký Azure.",
        "answer": false,
        "explanation_vi": ""
    },
    {
        "id": 101,
        "type": "True False",
        "question": "Microsoft Intune can be used to manage organization-owned devices and personal devices.",
        "question_vi": "Microsoft Intune có thể được sử dụng để quản lý các thiết bị thuộc sở hữu của tổ chức và các thiết bị cá nhân.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 102,
        "type": "True False",
        "question": "You can create one Azure Bastion per vitual network.",
        "question_vi": "Bạn có thể tạo một Azure Bastion trên mỗi mạng ảo.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 103,
        "type": "True False",
        "question": "Azure Bastion provides secure user connections by using RDP.",
        "question_vi": "Azure Bastion cung cấp kết nối người dùng an toàn bằng cách sử dụng RDP.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 104,
        "type": "True False",
        "question": "Azure Bastion provides a secure connection to an Azure virtual machine by using the Azure portal.",
        "question_vi": "Azure Bastion cung cấp kết nối an toàn đến một máy ảo Azure bằng cách sử dụng cổng Azure.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 105,
        "type": "Choose the correct answer",
        "question": "What feature in Microsoft Defender for Endpoint provides the first line of defense against cyberthreats by reducing the attack surface?",
        "question_vi": "Tính năng nào trong Microsoft Defender for Endpoint cung cấp tuyến phòng thủ đầu tiên chống lại các mối đe dọa an ninh mạng bằng cách giảm bề mặt tấn công?",
        "options": [
            "automated remediation",
            "automated investigation",
            "advanced hunting",
            "network protection"
        ],
        "answer": "network protection",
        "explanation_vi": "Bảo vệ mạng giúp bảo vệ thiết bị khỏi các sự kiện dựa trên Internet. Bảo vệ mạng là một khả năng giảm thiểu bề mặt tấn công."
    },
    {
        "id": 106,
        "type": "Choose the correct answer",
        "question": "In Microsoft Sentinal, you can automate common task by using ???.",
        "question_vi": "Trong Microsoft Sentinal, bạn có thể tự động hóa các tác vụ thông thường bằng cách sử dụng ???.",
        "options": [
            "playbooks",
            "workbooks",
            "deep investigation tools",
            "hunting search-and-query tools"
        ],
        "answer": "playbooks",
        "explanation_vi": "https://learn.microsoft.com/en-us/azure/sentinel/overview#automate-and-orchestrate-common-tasks-by-using-playbooks"
    },
    {
        "id": 107,
        "type": "Multiple Choices",
        "question": "Which two types of resources can be protected by using Azure Firewall?",
        "question_vi": "Hai loại tài nguyên nào có thể được bảo vệ bằng Azure Firewall?",
        "options": [
            "Azure Virtual Machines",
            "Azure Active Directory (Azure AD) users",
            "Microsoft Exchange Online inboxes",
            "Azure virtual networks",
            "Microsoft SharePoint Online sites"
        ],
        "answer": [
            "Azure Virtual Machines",
            "Azure virtual networks"
        ],
        "explanation_vi": "Azure Firewall giúp bảo vệ các tài nguyên Azure mà bạn đã kết nối với Azure Virtual Networks."
    },
    {
        "id": 108,
        "type": "Choose the correct answer",
        "question": "You plan to implement a security strategy and place multiple layers of defense throughout a network infrastructure. Which security methodology does this represent?",
        "question_vi": "Bạn dự định triển khai một chiến lược bảo mật và đặt nhiều lớp phòng thủ trong toàn bộ cơ sở hạ tầng mạng. Phương pháp bảo mật này đại diện cho điều gì?",
        "options": [
            "defense in depth",
            "threat modeling",
            "identity as the security perimeter",
            "the shared responsibility model"
        ],
        "answer": "defense in depth",
        "explanation_vi": "Mô hình phòng thủ theo chiều sâu (defense in depth) là một chiến lược bảo mật mạng bao gồm nhiều lớp phòng thủ khác nhau để bảo vệ tài nguyên mạng."
    },
    {
        "id": 109,
        "type": "True False",
        "question": "Microsoft Defender for Endpoint can protect Android devices.",
        "question_vi": "Microsoft Defender for Endpoint có thể bảo vệ các thiết bị Android.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 110,
        "type": "True False",
        "question": "Microsoft Defender for Endpoint can protect Azure virtual machines that run Windows 10.",
        "question_vi": "Microsoft Defender for Endpoint có thể bảo vệ các máy ảo Azure chạy Windows 10.",
        "answer": true,
        "explanation_vi": ""
    },
    {
        "id": 111,
        "type": "True False",
        "question": "Microsoft Defender for Endpoint can protect Microsoft SharePoint Online sites and content from viruses.",
        "question_vi": "Microsoft Defender for Endpoint có thể bảo vệ các trang web và nội dung Microsoft SharePoint Online khỏi vi-rút.",
        "answer": false,
        "explanation_vi": "Microsoft Defender for Endpoint được thiết kế để bảo vệ các thiết bị (máy tính, điện thoại). Để bảo vệ nội dung được lưu trữ trên môi trường cộng tác đám mây như SharePoint Online, OneDrive, và Microsoft Teams, dịch vụ phù hợp phải là Microsoft Defender for Office 365."
    },
    {
        "id": 112,
        "type": "Choose the correct answer",
        "question": "What can you use to scan email attachments and forward the attachments to recipients only if the attachments are free from malware?",
        "question_vi": "Bạn có thể sử dụng gì để quét các tệp đính kèm email và chuyển tiếp các tệp đính kèm cho người nhận chỉ khi các tệp đính kèm đó không có phần mềm độc hại?",
        "options": [
            "Microsoft Defender for Identity",
            "Microsoft Defender for Endpoint",
            "Microsoft Defender for Office 365",
            "Microsoft Defender Antivirus"
        ],
        "answer": "Microsoft Defender for Office 365",
        "explanation_vi": "Microsoft Defender for Office 365 cung cấp khả năng bảo vệ chống lại các mối đe dọa trong email và các ứng dụng cộng tác như SharePoint Online, OneDrive và Microsoft Teams."
    },
    {
        "id": 113,
        "type": "Choose the correct answer",
        "question": "Which feature provides the extended detection and response (XDR) capability of Azure Sentinel?",
        "question_vi": "Tính năng nào cung cấp khả năng phát hiện và phản hồi mở rộng (XDR) của Azure Sentinel?",
        "options": [
            "integration with the Microsoft 365 compliance center",
            "support for threat hunting",
            "integration with Microsoft 365 Defender",
            "support for Azure Monitor Workbooks"
        ],
        "answer": "integration with Microsoft 365 Defender",
        "explanation_vi": "Azure Sentinel cung cấp khả năng phát hiện và phản hồi mở rộng (XDR) thông qua việc tích hợp với Microsoft 365 Defender."
    },
    {
        "id": 114,
        "type": "Choose the correct answer",
        "question": "What can you use to provide threat detection for Azure SQL Managed Instance?",
        "question_vi": "Bạn có thể sử dụng gì để cung cấp phát hiện mối đe dọa cho Azure SQL Managed Instance?",
        "options": [
            "Microsoft Secure Score",
            "application security groups",
            "Microsoft Defender for Cloud",
            "Azure Bastion"
        ],
        "answer": "Microsoft Defender for Cloud",
        "explanation_vi": "Microsoft Defender for SQL là một gói dịch vụ trong Microsoft Defender for Cloud. Microsoft Defender for SQL bao gồm các chức năng giúp phát hiện và giảm thiểu các lỗ hổng bảo mật tiềm ẩn trong cơ sở dữ liệu, cũng như phát hiện các hoạt động bất thường có thể cho thấy mối đe dọa đối với cơ sở dữ liệu của bạn. Nó cung cấp một vị trí duy nhất để kích hoạt và quản lý các khả năng này."
    },
    {
        "id": 115,
        "type": "True False",
        "question": "Microsoft Secure Score in the Microsoft 365 security center can provide recommendations for Microsoft Cloud App Security.",
        "question_vi": "Microsoft Secure Score trong trung tâm bảo mật Microsoft 365 có thể cung cấp các đề xuất cho Microsoft Cloud App Security.",
        "answer": true,
        "explanation_vi": "Microsoft Secure Score tổng hợp và đánh giá dữ liệu từ nhiều dịch vụ khác nhau trong hệ sinh thái Microsoft, bao gồm Microsoft Defender for Office 365, Microsoft Defender for Identity, và cả Microsoft Cloud App Security (hiện tại đã đổi tên thành Microsoft Defender for Cloud Apps) để đưa ra các đề xuất cải thiện."
    },
    {
        "id": 116,
        "type": "True False",
        "question": "From the Microsoft 365 Defender portal, you can view how your Microsoft Secure Score compares to the score of organizations like yours.",
        "question_vi": "Từ cổng thông tin Microsoft 365 Defender, bạn có thể xem Microsoft Secure Score của mình so sánh như thế nào với điểm số của các tổ chức tương tự như bạn.",
        "answer": true,
        "explanation_vi": "Trong giao diện Secure Score, mục 'Metrics & trends' (Số liệu & xu hướng) cho phép bạn so sánh điểm bảo mật của tổ chức mình với các tổ chức khác có cùng quy mô (số lượng ghế/giấy phép) hoặc cùng ngành nghề hoạt động."
    },
    {
        "id": 117,
        "type": "True False",
        "question": "Microsoft Secure Score in the Microsoft 365 Defender portal gives you points if you address the improvement action by using a third-party application or software.",
        "question_vi": "Microsoft Secure Score trong cổng thông tin Microsoft 365 Defender cung cấp cho bạn điểm số nếu bạn giải quyết hành động cải thiện bằng cách sử dụng ứng dụng hoặc phần mềm của bên thứ ba.",
        "answer": true,
        "explanation_vi": "Microsoft hiểu rằng các tổ chức có thể dùng giải pháp của bên thứ ba để bảo mật. Bạn hoàn toàn có thể chọn một hành động cải thiện (improvement action) và đánh dấu trạng thái là 'Resolved through third party' (Đã giải quyết thông qua bên thứ ba). Khi đó, hệ thống sẽ ghi nhận rủi ro đã được giảm thiểu và vẫn cộng điểm Secure Score cho bạn."
    },
    {
        "id": 118,
        "type": "Choose the correct answer",
        "question": "Which Azure Active Directory (Azure AD) feature can you use to restrict Microsoft Intune-managed devices from accessing corporate resources?",
        "question_vi": "Bạn có thể sử dụng tính năng nào của Azure Active Directory (Azure AD) để hạn chế các thiết bị được quản lý bởi Microsoft Intune truy cập vào tài nguyên của công ty?",
        "options": [
            "network security groups (NSGs)",
            "Azure AD Privileged Identity Management (PIM)",
            "conditional access policies",
            "resource locks"
        ],
        "answer": "conditional access policies",
        "explanation_vi": "Conditional Access là một công cụ chính sách trong Azure AD cho phép bạn kiểm soát quyền truy cập vào các ứng dụng và tài nguyên dựa trên các điều kiện như vị trí, trạng thái thiết bị, và rủi ro đăng nhập."
    },
    {
        "id": 119,
        "type": "Choose the correct answer",
        "question": "??? can use conditional access policies to control sessions in realtime.",
        "question_vi": "??? có thể sử dụng chính sách truy cập có điều kiện để kiểm soát phiên trong thời gian thực.",
        "options": [
            "Azure AD Privileged Identity Management (PIM)",
            "Azure Defender",
            "Azure Sentinel",
            "Microsoft Defender for Cloud Apps"
        ],
        "answer": "Microsoft Defender for Cloud Apps",
        "explanation_vi": ""
    },
    {
        "id": 120,
        "type": "Choose the correct answer",
        "question": "Azure DDoS Protection Standard can be used to protect ???",
        "question_vi": "Azure DDoS Protection Standard có thể được sử dụng để bảo vệ ???",
        "options": [
            "Azure AD Applications",
            "Azure AD users",
            "Resource groups",
            "Virtual Networks"
        ],
        "answer": "Virtual Networks",
        "explanation_vi": "Azure DDoS Protection Standard, kết hợp với các phương pháp thiết kế ứng dụng tốt nhất, cung cấp các tính năng giảm thiểu tấn công DDoS nâng cao để chống lại các cuộc tấn công DDoS. Nó được tự động tinh chỉnh để giúp bảo vệ các tài nguyên Azure cụ thể của bạn trong mạng ảo. Việc kích hoạt tính năng bảo vệ rất đơn giản trên bất kỳ mạng ảo mới hoặc hiện có nào, và không yêu cầu thay đổi ứng dụng hoặc tài nguyên."
    },
    {
        "id": 121,
        "type": "Choose the correct answer",
        "question": "What should you use in the Microsoft 365 Defender portal to view security trends and track the protection status of identities?",
        "question_vi": "Bạn nên sử dụng gì trong cổng thông tin Microsoft 365 Defender để xem xu hướng bảo mật và theo dõi trạng thái bảo vệ của danh tính?",
        "options": [
            "Attack simulator",
            "Reports",
            "Incidents",
            "Hunting"
        ],
        "answer": "Reports",
        "explanation_vi": "Trong cổng thông tin Microsoft 365 Defender, bạn có thể sử dụng Reports để xem xu hướng bảo mật và theo dõi trạng thái bảo vệ của danh tính. Tips: trends => reports."
    },
    {
        "id": 122,
        "type": "Choose the correct answer",
        "question": "You have a Microsoft 365 E3 subscription. You plan to audit user activity by using the unified audit log and Basic Audit. For how long will the audit records be retained?",
        "question_vi": "Bạn có một thuê bao Microsoft 365 E3. Bạn dự định kiểm tra hoạt động của người dùng bằng cách sử dụng nhật ký kiểm tra hợp nhất và Kiểm tra cơ bản. Hồ sơ kiểm tra sẽ được giữ trong bao lâu?",
        "options": [
            "180 days",
            "15 days",
            "90 days",
            "30 days"
        ],
        "answer": "90 days",
        "explanation_vi": "Tính năng kiểm toán hợp nhất của Microsoft 365 giúp theo dõi các hoạt động được thực hiện trong các dịch vụ Microsoft 365 khác nhau bởi cả người dùng và quản trị viên. Tính năng kiểm toán cơ bản được bật theo mặc định cho hầu hết các tổ chức sử dụng Microsoft 365. Trong chế độ kiểm toán cơ bản, các bản ghi kiểm toán được lưu giữ và có thể tìm kiếm trong vòng 90 ngày gần nhất."
    },
    {
        "id": 123,
        "type": "Choose the correct answer",
        "question": "To which type of resource can Azure Bastion provide secure access?",
        "question_vi": "Azure Bastion có thể cung cấp quyền truy cập an toàn cho loại tài nguyên nào?",
        "options": [
            "Azure Files",
            "Azure SQL Managed Instances",
            "Azure Virtual Machines",
            "Azure App Services"
        ],
        "answer": "Azure Virtual Machines",
        "explanation_vi": "Azure Bastion là một dịch vụ PaaS (Platform as a Service) của Microsoft Azure cho phép bạn kết nối an toàn và liền mạch tới các máy ảo (VM) trong mạng ảo của mình thông qua giao thức RDP (Remote Desktop Protocol) hoặc SSH (Secure Shell) trực tiếp từ cổng thông tin Azure. Nó loại bỏ nhu cầu về địa chỉ IP công cộng trên các VM, giảm thiểu bề mặt tấn công."
    },
    {
        "id": 124,
        "type": "Multiple Choices",
        "question": "What are three uses of Microsoft Cloud App Security?",
        "question_vi": "Ba công dụng của Microsoft Cloud App Security là gì?",
        "options": [
            "to discover and control the use of shadow IT",
            "to provide secure connections to Azure virtual machines",
            "to protect sensitive information hosted anywhere in the cloud",
            "to provide pass-through authentication to on-premises applications",
            "to prevent data leaks to noncompliant apps and limit access to regulated data"
        ],
        "answer": [
            "to discover and control the use of shadow IT",
            "to protect sensitive information hosted anywhere in the cloud",
            "to prevent data leaks to noncompliant apps and limit access to regulated data"
        ],
        "explanation_vi": ""
    },
    {
        "id": 125,
        "type": "Choose the correct answer",
        "question": "In the Microsoft 365 Defender portal, an incident is a collection of correlated ???",
        "question_vi": "Trong cổng thông tin Microsoft 365 Defender, một sự cố là một tập hợp các ??? có tương quan",
        "options": [
            "Alerts",
            "Events",
            "Vulnerabilities",
            "Microsoft Secure Score improvement actions"
        ],
        "answer": "Alerts",
        "explanation_vi": "Trong cổng thông tin Microsoft 365 Defender, một sự cố là một tập hợp các cảnh báo và dữ liệu liên quan được tương quan để tạo thành kịch bản về một cuộc tấn công."
    },
    {
        "id": 126,
        "type": "Choose the correct answer",
        "question": "You need to connect to an Azure virtual machine by using Azure Bastion. What should you use?",
        "question_vi": "Bạn cần kết nối với một máy ảo Azure bằng cách sử dụng Azure Bastion. Bạn nên sử dụng gì?",
        "options": [
            "PowerShell remoting",
            "the Azure portal",
            "the Remote Desktop Connection client",
            "an SSH client"
        ],
        "answer": "the Azure portal",
        "explanation_vi": "Azure Bastion là một dịch vụ PaaS (Platform as a Service) của Microsoft Azure cho phép bạn kết nối an toàn và liền mạch tới các máy ảo (VM) trong mạng ảo của mình thông qua giao thức RDP (Remote Desktop Protocol) hoặc SSH (Secure Shell) trực tiếp từ cổng thông tin Azure. Nó loại bỏ nhu cầu về địa chỉ IP công cộng trên các VM, giảm thiểu bề mặt tấn công."
    },
    {
        "id": 127,
        "type": "Choose the correct answer",
        "question": "Which service includes the Attack simulation training feature?",
        "question_vi": "Dịch vụ nào bao gồm tính năng Huấn luyện mô phỏng tấn công?",
        "options": [
            "Microsoft Defender for Identity",
            "Microsoft Defender for SQL",
            "Microsoft Defender for Cloud Apps",
            "Microsoft Defender for Office 365"
        ],
        "answer": "Microsoft Defender for Office 365",
        "explanation_vi": "Chương trình huấn luyện mô phỏng tấn công trong Microsoft Defender cho Office 365 Gói 2 hoặc Microsoft 365 E5 cho phép bạn chạy các mô phỏng tấn công mạng lành tính trong tổ chức của mình. Các mô phỏng này kiểm tra các chính sách và thực tiễn bảo mật của bạn, cũng như đào tạo nhân viên để nâng cao nhận thức và giảm khả năng bị tấn công."
    },
    {
        "id": 128,
        "type": "Choose the correct answer",
        "question": "Which type of alert can you manage from the Microsoft 365 Defender portal?",
        "question_vi": "Bạn có thể quản lý loại cảnh báo nào từ cổng thông tin Microsoft 365 Defender?",
        "options": [
            "Microsoft Defender for Storage",
            "Microsoft Defender for SQL",
            "Microsoft Defender for Endpoint",
            "Microsoft Defender for IoT"
        ],
        "answer": "Microsoft Defender for Endpoint",
        "explanation_vi": "Hàng đợi cảnh báo hiển thị tập hợp các cảnh báo hiện tại. Bạn có thể truy cập hàng đợi cảnh báo từ 'Sự cố & cảnh báo' > 'Cảnh báo' trên thanh khởi chạy nhanh của cổng thông tin Microsoft 365 Defender. Các cảnh báo từ các giải pháp bảo mật khác nhau của Microsoft như Microsoft Defender for Endpoint, Microsoft Defender for Office 365 và Microsoft 365 Defender sẽ xuất hiện ở đây."
    },
    {
        "id": 129,
        "type": "True False",
        "question": "Microsoft Sentinel data connectors support only Microsoft services.",
        "question_vi": "Các trình kết nối dữ liệu của Microsoft Sentinel chỉ hỗ trợ các dịch vụ của Microsoft.",
        "answer": false,
        "explanation_vi": "Các trình kết nối dữ liệu Microsoft Sentinel có sẵn cho các dịch vụ không thuộc Microsoft, chẳng hạn như Amazon Web Services."
    },
    {
        "id": 130,
        "type": "True False",
        "question": "You can use Azure Monitor workbooks to monitor data collected by Microsoft Sentinel.",
        "question_vi": "Bạn có thể sử dụng các sổ làm việc (workbooks) của Azure Monitor để giám sát dữ liệu do Microsoft Sentinel thu thập.",
        "answer": true,
        "explanation_vi": "Sau khi kết nối các nguồn dữ liệu của bạn với Microsoft Sentinel, bạn có thể trực quan hóa và giám sát dữ liệu bằng cách sử dụng tính năng tích hợp Microsoft Sentinel của Azure Monitor Workbooks, cung cấp tính linh hoạt trong việc tạo bảng điều khiển tùy chỉnh. Mặc dù Workbooks được hiển thị khác nhau trong Microsoft Sentinel, nhưng bạn có thể tham khảo cách tạo báo cáo tương tác với Azure Monitor Workbooks. Microsoft Sentinel cho phép bạn tạo các workbook tùy chỉnh trên toàn bộ dữ liệu của mình, đồng thời đi kèm với các mẫu workbook tích hợp sẵn để giúp bạn nhanh chóng thu thập thông tin chi tiết về dữ liệu ngay sau khi kết nối nguồn dữ liệu."
    },
    {
        "id": 131,
        "type": "True False",
        "question": "Hunting provides you with the ability to identify security threats before an alert is triggered.",
        "question_vi": "Tính năng Hunting (Săn lùng) cung cấp cho bạn khả năng xác định các mối đe dọa bảo mật trước khi một cảnh báo được kích hoạt.",
        "answer": true,
        "explanation_vi": "Để giúp các nhà phân tích bảo mật chủ động tìm kiếm những bất thường mới mà các ứng dụng bảo mật của bạn hoặc thậm chí các quy tắc phân tích theo lịch trình của bạn chưa phát hiện ra, các truy vấn tìm kiếm tích hợp sẵn của Microsoft Sentinel sẽ hướng dẫn bạn đặt đúng câu hỏi để tìm ra các vấn đề trong dữ liệu bạn đã có trên mạng của mình."
    },
    {
        "id": 132,
        "type": "Multiple Choices",
        "question": "Which two Azure resources can a network security group (NSG) be associated with?",
        "question_vi": "Nhóm bảo mật mạng (NSG) có thể được liên kết với những tài nguyên Azure nào?",
        "options": [
            "a virtual network subnet",
            "a network interface",
            "a resource group",
            "a virtual network",
            "an Azure App Service web app"
        ],
        "answer": [
            "a virtual network subnet",
            "a network interface"
        ],
        "explanation_vi": "Bạn có thể liên kết một nhóm bảo mật mạng (NSG) với một hoặc nhiều tài nguyên sau: virtual machines, NICs, và subnets."
    },
    {
        "id": 133,
        "type": "Choose the correct answer",
        "question": "What is a use case for implementing information barrier policies in Microsoft 365?",
        "question_vi": "Trường hợp sử dụng nào sau đây là ví dụ về việc triển khai chính sách rào cản thông tin (information barrier policies) trong Microsoft 365?",
        "options": [
            "to restrict unauthenticated access to Microsoft 365",
            "to restrict Microsoft Teams chats between certain groups within an organization",
            "to restrict Microsoft Exchange Online email between certain groups within an organization",
            "to restrict data sharing to external email recipients"
        ],
        "answer": "to restrict Microsoft Teams chats between certain groups within an organization",
        "explanation_vi": "Microsoft Teams, SharePoint Online và OneDrive for Business hỗ trợ các rào cản thông tin. compliance administrator hoặc information barrier administrator có thể định nghĩa các chính sách cho phép hoặc ngăn chặn việc liên lạc giữa các nhóm người dùng trong Microsoft Teams."
    },
    {
        "id": 134,
        "type": "Choose the correct answer",
        "question": "What can you use to deploy Azure resources across multiple subscriptions in a consistent manner?",
        "question_vi": "Bạn có thể sử dụng gì để triển khai tài nguyên Azure trên nhiều subscriptions theo cách nhất quán?",
        "options": [
            "Microsoft Defender for Cloud",
            "Azure Blueprints",
            "Microsoft Sentinel",
            "Azure Policy"
        ],
        "answer": "Azure Blueprints",
        "explanation_vi": "Azure Blueprints cho phép bạn định nghĩa một tập hợp các tài nguyên Azure tiêu chuẩn hóa, có thể tái sử dụng để triển khai trên nhiều subscriptions theo cách nhất quán. Nó kết hợp các thành phần như ARM templates, role assignments, và policy assignments để đảm bảo việc triển khai tuân thủ các tiêu chuẩn và quy định."
    },
    {
        "id": 135,
        "type": "True False",
        "question": "With Advanced Audit in Microsoft 365, you can identify when email items were accessed.",
        "question_vi": "Với Advanced Audit trong Microsoft 365, bạn có thể xác định khi nào các mục email được truy cập.",
        "answer": true,
        "explanation_vi": "Advanced Audit cho phép bạn theo dõi các hành động nhạy cảm trong Microsoft 365, bao gồm cả việc truy cập email, giúp tăng cường khả năng giám sát và điều tra an ninh."
    },
    {
        "id": 136,
        "type": "True False",
        "question": "Advanced Audit in Microsoft 365 supports the same retention period of audit logs as core auditing.",
        "question_vi": "Advanced Audit trong Microsoft 365 hỗ trợ cùng một thời gian lưu giữ nhật ký kiểm tra (audit logs) như core auditing.",
        "answer": false,
        "explanation_vi": "Basic Audit lưu giữ hồ sơ kiểm toán trong 90 ngày. Advanced Audit lưu giữ tất cả hồ sơ kiểm toán của Exchange, SharePoint và Azure Active Directory trong một năm. Điều này được thực hiện bằng chính sách lưu giữ nhật ký kiểm toán mặc định, giữ lại bất kỳ hồ sơ kiểm toán nào chứa giá trị Exchange, SharePoint hoặc AzureActiveDirectory cho thuộc tính Khối lượng công việc (cho biết dịch vụ nơi hoạt động xảy ra) trong một năm."
    },
    {
        "id": 137,
        "type": "True False",
        "question": "Advanced Audit in Microsoft 365 allocates customer-dedicated bandwidth for accessing audit data.",
        "question_vi": "Advanced Audit trong Microsoft 365 phân bổ băng thông dành riêng cho khách hàng để truy cập dữ liệu kiểm tra.",
        "answer": true,
        "explanation_vi": "Advanced Audit trong Microsoft 365 phân bổ băng thông dành riêng cho khách hàng để truy cập dữ liệu kiểm tra, giúp đảm bảo hiệu suất và độ tin cậy khi truy xuất dữ liệu kiểm tra."
    },
    {
        "id": 138,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) Identity Protection can add users to groups based on the users' risk level.",
        "question_vi": "Azure Active Directory (Azure AD) Identity Protection có thể thêm người dùng vào các nhóm dựa trên mức độ rủi ro của người dùng.",
        "answer": false,
        "explanation_vi": "Azure AD Identity Protection có thể thêm người dùng vào các nhóm dựa trên mức độ rủi ro của người dùng."
    },
    {
        "id": 139,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) Identity Protection can detect whether user credentials were leaked to the public.",
        "question_vi": "Azure Active Directory (Azure AD) Identity Protection có thể phát hiện xem thông tin xác thực của người dùng có bị rò rỉ ra công chúng hay không.",
        "answer": true,
        "explanation_vi": "Azure AD Identity Protection có thể phát hiện xem thông tin xác thực của người dùng có bị rò rỉ ra công chúng hay không."
    },
    {
        "id": 140,
        "type": "True False",
        "question": "Azure Active Directory (Azure AD) Identity Protection can be used to invoke Multi-Factor Authentication based on a user's risk level.",
        "question_vi": "Azure Active Directory (Azure AD) Identity Protection có thể được sử dụng để gọi Xác thực đa yếu tố (MFA) dựa trên mức độ rủi ro của người dùng.",
        "answer": true,
        "explanation_vi": "Azure AD Identity Protection có thể được sử dụng để gọi Xác thực đa yếu tố (MFA) dựa trên mức độ rủi ro của người dùng."
    },
    {
        "id": 141,
        "type": "Choose the correct answer",
        "question": "Which Microsoft 365 compliance center feature can you use to identify all the documents on a Microsoft SharePoint Online site that contain a specific key word?",
        "question_vi": "Bạn có thể sử dụng tính năng nào trong trung tâm tuân thủ Microsoft 365 để xác định tất cả các tài liệu trên một trang Microsoft SharePoint Online chứa một từ khóa cụ thể?",
        "options": [
            "Audit",
            "Compliance Manager",
            "Content Search",
            "Alerts"
        ],
        "answer": "Content Search",
        "explanation_vi": "Content Search trong trung tâm tuân thủ Microsoft 365 cho phép bạn tìm kiếm nội dung trong các dịch vụ Microsoft 365, bao gồm cả các tài liệu trên SharePoint Online, dựa trên các từ khóa và điều kiện khác."
    },
    {
        "id": 142,
        "type": "Choose the correct answer",
        "question": "??? provides a central location for managing information protection, information governance, and data loss prevention (DLP) policies.",
        "question_vi": "??? cung cấp một vị trí trung tâm để quản lý bảo vệ thông tin, quản trị thông tin và các chính sách ngăn chặn mất dữ liệu (DLP).",
        "options": [
            "Azure Defender",
            "The Microsoft 365 compliance center (Microsoft Purview compliance portal)",
            "The Microsoft Defender portal",
            "Microsoft Endpoint Manager"
        ],
        "answer": "The Microsoft 365 compliance center (Microsoft Purview compliance portal)",
        "explanation_vi": ""
    },
    {
        "id": 143,
        "type": "Choose the correct answer",
        "question": "Which Microsoft 365 feature can you use to restrict users from sending email messages that contain lists of customers and their associated credit card numbers?",
        "question_vi": "Bạn có thể sử dụng tính năng nào trong Microsoft 365 để hạn chế người dùng gửi email chứa danh sách khách hàng và số thẻ tín dụng của họ?",
        "options": [
            "retention policies",
            "data loss prevention (DLP) policies",
            "conditional access policies",
            "information barriers"
        ],
        "answer": "data loss prevention (DLP) policies",
        "explanation_vi": ""
    },
    {
        "id": 144,
        "type": "Choose the correct answer",
        "question": "??? can be used to provide Microsoft Support Engineers with access to an organization's data stored in Microsoft Exchange Online, and OneDrive for Business",
        "question_vi": "??? có thể được sử dụng để cung cấp cho các kỹ sư hỗ trợ của Microsoft quyền truy cập vào dữ liệu của tổ chức được lưu trữ trong Microsoft Exchange Online và OneDrive for Business",
        "options": [
            "Customer Lockbox",
            "Information barrier",
            "Privilege Access Management (PAM)",
            "Sensitivity labels"
        ],
        "answer": "Customer Lockbox",
        "explanation_vi": ""
    },
    {
        "id": 145,
        "type": "Choose the correct answer",
        "question": "In a Core eDiscovery workflow, what should you do before you can search for content?",
        "question_vi": "Trong quy trình eDiscovery cốt lõi, bạn nên làm gì trước khi có thể tìm kiếm nội dung?",
        "options": [
            "Create an eDiscovery hold",
            "Run Express Analysis",
            "Configure attorney-client privilege detection",
            "Export and download results"
        ],
        "answer": "Create an eDiscovery hold",
        "explanation_vi": "Khi tạo lệnh giữ dữ liệu eDiscovery, bước đầu tiên sau khi tạo case là đặt lệnh giữ dữ liệu (còn gọi là lệnh giữ dữ liệu eDiscovery) đối với các vị trí lưu trữ nội dung của những người có liên quan trong cuộc điều tra. Mặc dù bước này là tùy chọn."
    }
];
