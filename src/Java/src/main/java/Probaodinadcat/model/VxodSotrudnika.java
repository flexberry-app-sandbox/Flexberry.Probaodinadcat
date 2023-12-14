package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВходСотрудника
 */
@Entity(name = "IISProbaodinadcatВходСотрудника")
@Table(schema = "public", name = "ВходСотрудника")
public class VxodSotrudnika {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistracVxoda")
    @Convert("RegistracVxoda")
    @Column(name = "РегистрацВхода", length = 16, unique = true, nullable = false)
    private UUID _registracvxodaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistracVxoda", insertable = false, updatable = false)
    private RegistracVxoda registracvxoda;


    public VxodSotrudnika() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}