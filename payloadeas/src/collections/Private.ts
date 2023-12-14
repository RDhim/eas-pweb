const PrivateData = {
    slug: 'Data',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: "Nama",
            type: "text",
            required: "true", 
        },
        {
            name: "Email",
            type: "email",
            required: "true",
            unique: "true",
        },
        {
            name: "Asal_Sekolah",
            label: "Asal Sekolah",
            type: "text",
            required: "true",
        },
        {
            name: "Status",
            type: "radio",
            required: "true",
            options: [
                {
                    label: "Waiting",
                    value: "waiting"
                },
                {
                    label: "Accepted",
                    value: "accepted",
                },
                {
                    label: "Rejected",
                    value: "rejected",
                },
            ],
            defaultValue: 'waiting',
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Tanggal_Pendaftaran",
            label: "Tanggal Pendaftaran",
            type: "date",
            required: "true",
        },
    ],
}

export default PrivateData